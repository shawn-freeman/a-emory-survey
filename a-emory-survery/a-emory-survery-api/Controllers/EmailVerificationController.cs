using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Text.RegularExpressions;

namespace a_emory_survery_api.Controllers
{
    public class EmailVerificationController : Controller
    {
        public ActionResult ValidateEmail(string email)
        {
            var isValidEmail = IsValidEmail(email);

            if (isValidEmail)
            {
                //TODO: Send an actual email to confirm
                return Ok();
            }
            else
            {
                return BadRequest("Not a Valid Email");
            }
        }

        private bool IsValidEmail(string emailAddress)
        {
            if (string.IsNullOrWhiteSpace(emailAddress)) 
                return false;

            try
            {
                // (@)          Match the @ character. This part is the first capturing group.
                // (.+)         Match one or more occurrences of any character. This part is the second capturing group.
                // $ 	        End the match at the end of the string.
                var normalizedEmail = Regex.Replace(
                    emailAddress, 
                    @"(@)(.+)$", 
                    DomainMapper,
                    RegexOptions.None, 
                    TimeSpan.FromMilliseconds(200)
                    );

                // Examines the domain part of the email and normalizes it.
                string DomainMapper(Match match)
                {
                    // Use IdnMapping class to convert Unicode domain names.
                    var idn = new IdnMapping();

                    // Pull out and process domain name (throws ArgumentException on invalid)
                    string domainName = idn.GetAscii(match.Groups[2].Value);

                    return match.Groups[1].Value + domainName;
                }
            }
            catch (RegexMatchTimeoutException e)
            {
                return false;
            }
            catch (ArgumentException e)
            {
                return false;
            }

            try
            {
                // ^	        Begin the match at the start of the string.
                // [^@\s]+	    Match one or more occurrences of any character other than the @ character or whitespace.
                // @	        Match the @ character.
                // [^@\s]+	    Match one or more occurrences of any character other than the @ character or whitespace.
                // \.	        Match a single period character.
                // [^@\s]+	    Match one or more occurrences of any character other than the @ character or whitespace.
                // $	        End the match at the end of the string.
                return Regex.IsMatch(emailAddress,
                    @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
                    RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250));
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }
    }
}
