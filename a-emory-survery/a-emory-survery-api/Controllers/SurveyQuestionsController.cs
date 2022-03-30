using Microsoft.AspNetCore.Mvc;

namespace a_emory_survey_api.Controllers
{
    public class SurveyQuestionsController : Controller
    {
        private EmorySurveyDbContext _dbContext;
        public SurveyQuestionsController(EmorySurveyDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        /// <summary>
        /// Gets survey questions that have not been answered yet.
        /// </summary>
        /// <returns></returns>
        public ActionResult GetSurveyQuestions(string code)
        {
            var entry = _dbContext.SurveyEntry.FirstOrDefault(se => se.VerificationCode == code);

            if (entry == null) return BadRequest("Not Valid");

            var unansweredSurveyQuestions = _dbContext.QuestionDefinition
                .Where(qd => _dbContext.SurveyQuestion.FirstOrDefault(sq => sq.SurveyEntry.VerificationCode == code && sq.QuestionDefinition.Id == qd.Id) == null)
                .Select(qd => new SurveyQuestion() { 
                    SurveyEntryId = entry.Id,
                    QuestionDefinitionId = qd.Id,
                    QuestionDefinition = qd,
                })
                .ToList();

            return Ok(unansweredSurveyQuestions);
        }

        [HttpPost]
        public ActionResult AnswerQuestion([FromBody]SurveyQuestion surveyQuestion)
        {
            _dbContext.SurveyQuestion.Update(surveyQuestion);
            _dbContext.SaveChanges();

            return Ok(true);
        }
    }
}
