using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survery_api.Migrations
{
    public partial class isanswered : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QuestionDefId",
                table: "SurveyQuestion",
                newName: "QuestionDefinitionId");

            migrationBuilder.AddColumn<bool>(
                name: "IsAnswered",
                table: "SurveyQuestion",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_SurveyQuestion_QuestionDefinitionId",
                table: "SurveyQuestion",
                column: "QuestionDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_SurveyQuestion_SurveyEntryId",
                table: "SurveyQuestion",
                column: "SurveyEntryId");

            migrationBuilder.AddForeignKey(
                name: "FK_SurveyQuestion_QuestionDefinition_QuestionDefinitionId",
                table: "SurveyQuestion",
                column: "QuestionDefinitionId",
                principalTable: "QuestionDefinition",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SurveyQuestion_SurveyEntry_SurveyEntryId",
                table: "SurveyQuestion",
                column: "SurveyEntryId",
                principalTable: "SurveyEntry",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SurveyQuestion_QuestionDefinition_QuestionDefinitionId",
                table: "SurveyQuestion");

            migrationBuilder.DropForeignKey(
                name: "FK_SurveyQuestion_SurveyEntry_SurveyEntryId",
                table: "SurveyQuestion");

            migrationBuilder.DropIndex(
                name: "IX_SurveyQuestion_QuestionDefinitionId",
                table: "SurveyQuestion");

            migrationBuilder.DropIndex(
                name: "IX_SurveyQuestion_SurveyEntryId",
                table: "SurveyQuestion");

            migrationBuilder.DropColumn(
                name: "IsAnswered",
                table: "SurveyQuestion");

            migrationBuilder.RenameColumn(
                name: "QuestionDefinitionId",
                table: "SurveyQuestion",
                newName: "QuestionDefId");
        }
    }
}
