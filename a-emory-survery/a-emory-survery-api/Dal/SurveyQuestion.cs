namespace a_emory_survery_api.Dal
{
    public class SurveyQuestion
    {
        public int Id { get; set; }
        public SurveyEntry SurveyEntry { get; set; }
        public QuestionDefinition QuestionDefinition { get; set; }

        public string Answer { get; set; }
        public bool IsAnswered { get; set; }
    }
}
