using Microsoft.EntityFrameworkCore;

namespace a_emory_survey_api.Dal
{
    public class EmorySurveyDbContext : DbContext
    {
        public EmorySurveyDbContext(DbContextOptions<EmorySurveyDbContext> options) : base (options)
        {

        }

        public DbSet<SurveyEntry> SurveyEntry { get; set; }
        public DbSet<SurveyQuestion> SurveyQuestion { get; set; }
        public DbSet<QuestionDefinition> QuestionDefinition { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuestionDefinition>().HasData(
                new QuestionDefinition() { Id = 1, Description = "Question 1" },
                new QuestionDefinition() { Id = 2, Description = "Question 2" },
                new QuestionDefinition() { Id = 3, Description = "Question 3" },
                new QuestionDefinition() { Id = 4, Description = "Question 4" },
                new QuestionDefinition() { Id = 5, Description = "Question 5" }
                );
        }
    }

    
}
