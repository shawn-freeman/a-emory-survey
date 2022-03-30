namespace a_emory_survey_api.Dal
{
    public class SurveyQuestion
    {
        public int Id { get; set; }
        public int SurveyEntryId { get; set; }
        public virtual SurveyEntry SurveyEntry { get; set; }
        public int QuestionDefinitionId { get; set; }
        public virtual QuestionDefinition QuestionDefinition { get; set; }

        public string Answer { get; set; }
        public bool IsAnswered { get; set; }
    }
}
