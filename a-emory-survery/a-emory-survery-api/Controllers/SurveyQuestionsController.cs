﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

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
            var unansweredQuestionDefinitions = _dbContext.QuestionDefinition
                .Where(qd => _dbContext.SurveyQuestion.FirstOrDefault(sq => sq.SurveyEntry.VerificationCode == code && sq.QuestionDefinition.Id == qd.Id) == null)
                .ToList();

            return Ok(unansweredQuestionDefinitions);
        }

        public ActionResult AnswerQuestion(SurveyQuestion question)
        {
            _dbContext.SurveyQuestion.Add(question);
            _dbContext.SaveChanges();

            return Ok(true);
        }
    }
}