// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using a_emory_survey_api.Dal;

#nullable disable

namespace a_emory_survey_api.Migrations
{
    [DbContext(typeof(EmorySurveyDbContext))]
    [Migration("20220324192951_initialmigration")]
    partial class initialmigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("a_emory_survey_api.Dal.QuestionDefinition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("EntryId")
                        .HasColumnType("int");

                    b.Property<int>("Text")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("QuestionDefinition");
                });
#pragma warning restore 612, 618
        }
    }
}
