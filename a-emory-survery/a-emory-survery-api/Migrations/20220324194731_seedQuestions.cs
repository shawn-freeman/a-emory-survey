using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survery_api.Migrations
{
    public partial class seedQuestions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "QuestionDefinition",
                columns: new[] { "Id", "Description" },
                values: new object[,]
                {
                    { 1, "Question 1" },
                    { 2, "Question 2" },
                    { 3, "Question 3" },
                    { 4, "Question 4" },
                    { 5, "Question 5" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "QuestionDefinition",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "QuestionDefinition",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "QuestionDefinition",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "QuestionDefinition",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "QuestionDefinition",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
