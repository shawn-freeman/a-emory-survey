using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survey_api.Migrations
{
    public partial class surveyEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SurveyEntry",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VerificationCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SurveyEntry", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SurveyQuestion",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SurveyEntryId = table.Column<int>(type: "int", nullable: false),
                    QuestionDefId = table.Column<int>(type: "int", nullable: false),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SurveyQuestion", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SurveyEntry");

            migrationBuilder.DropTable(
                name: "SurveyQuestion");
        }
    }
}
