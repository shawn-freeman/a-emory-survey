using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survey_api.Migrations
{
    public partial class removedeftextentityid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EntryId",
                table: "QuestionDefinition");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "QuestionDefinition");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "QuestionDefinition",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Description",
                table: "QuestionDefinition",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "EntryId",
                table: "QuestionDefinition",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Text",
                table: "QuestionDefinition",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
