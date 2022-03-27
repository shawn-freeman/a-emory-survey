﻿// <auto-generated />
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
    [Migration("20220327212241_is-answered")]
    partial class isanswered
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

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("QuestionDefinition");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Question 1"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Question 2"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Question 3"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Question 4"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Question 5"
                        });
                });

            modelBuilder.Entity("a_emory_survey_api.Dal.SurveyEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VerificationCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("SurveyEntry");
                });

            modelBuilder.Entity("a_emory_survey_api.Dal.SurveyQuestion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Answer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsAnswered")
                        .HasColumnType("bit");

                    b.Property<int>("QuestionDefinitionId")
                        .HasColumnType("int");

                    b.Property<int>("SurveyEntryId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("QuestionDefinitionId");

                    b.HasIndex("SurveyEntryId");

                    b.ToTable("SurveyQuestion");
                });

            modelBuilder.Entity("a_emory_survey_api.Dal.SurveyQuestion", b =>
                {
                    b.HasOne("a_emory_survey_api.Dal.QuestionDefinition", "QuestionDefinition")
                        .WithMany()
                        .HasForeignKey("QuestionDefinitionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("a_emory_survey_api.Dal.SurveyEntry", "SurveyEntry")
                        .WithMany()
                        .HasForeignKey("SurveyEntryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("QuestionDefinition");

                    b.Navigation("SurveyEntry");
                });
#pragma warning restore 612, 618
        }
    }
}
