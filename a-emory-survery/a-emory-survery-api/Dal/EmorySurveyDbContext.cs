using Microsoft.EntityFrameworkCore;

namespace a_emory_survery_api.Dal
{
    public class EmorySurveyDbContext : DbContext
    {
        public EmorySurveyDbContext(DbContextOptions<EmorySurveyDbContext> options) : base (options)
        {

        }

        public DbSet<QuestionDefinition> QuestionDefinition { get; set; }
    }

    
}
