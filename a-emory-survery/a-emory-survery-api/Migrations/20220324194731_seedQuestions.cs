using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survey_api.Migrations
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
                    { 1, "Do you consider yourself a part of the LGTBQ community?" },
                    { 2, "What is your blood type?" },
                    { 3, "If you worked in a software position for 5 years using a technology stack that included but not limited to C# .NET, .NET Core, SQL Server, Angular, React, Javascript, HTML, CSS, Xamarin, SOAP, UWP, EntityFramework, MVC, WPF, CosmosDB, Node.JS, Unity3d, OpenSSL and Microsoft Azure how much experience would you say you had in each?" },
                    { 4, "You are a member of the LGTBQ community and someone does not understand your way of life. What would be your drug of choice to punish the individual?" },
                    { 5, "If someone were to say to you \"I am Poly.\" how would you interpret the statement?" },
                    { 6, "If someone demonstrated romantic interest in you, how might you abuse this person?" },
                    { 7, "In your own words, describe love." },
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
