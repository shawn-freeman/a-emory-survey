namespace a_emory_survery_api.Dal
{
    public class SurveyQuestion
    {
        public int Id { get; set; }
        public int SurveyEntryId { get; set; }
        public int QuestionDefId { get; set; }

        public string Answer { get; set; }
    }
}
