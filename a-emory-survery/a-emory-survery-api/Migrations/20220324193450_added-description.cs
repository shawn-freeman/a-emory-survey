using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace a_emory_survey_api.Migrations
{
    public partial class addeddescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Description",
                table: "QuestionDefinition",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "QuestionDefinition");
        }
    }
}
