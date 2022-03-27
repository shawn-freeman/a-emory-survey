﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace a_emory_survery_api.Controllers
{
    public class QuestionController : Controller
    {
        private EmorySurveyDbContext _dbContext;
        public QuestionController(EmorySurveyDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        /// <summary>
        /// Gets survey questions that have not been answered yet.
        /// </summary>
        /// <returns></returns>
        public ActionResult GetSurveyQuestions()
        {
            return Ok();
        }
    }
}