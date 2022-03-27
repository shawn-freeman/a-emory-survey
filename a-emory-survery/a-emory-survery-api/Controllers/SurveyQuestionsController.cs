using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace a_emory_survery_api.Controllers
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
        public ActionResult GetSurveyQuestions()
        {
            var questions = _dbContext.SurveyQuestion
                .Include(sq => sq.QuestionDefinition)
                .Include(sq => sq.SurveyEntry)
                .ToList();
                
            return Ok(questions);
        }
    }
}
