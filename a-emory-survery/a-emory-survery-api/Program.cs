global using a_emory_survey_api.Dal;
global using Microsoft.Extensions.Configuration;
global using Microsoft.EntityFrameworkCore;
using a_emory_survery_api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
                      {
                          builder.WithOrigins("http://localhost:19006",
                                              "https://localhost:19006").AllowAnyHeader().AllowAnyMethod();
                      });
});

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<EmorySurveyDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmorySurveyDb")));

//Inject SendGrid AppSettings
builder.Services.Configure<SendGridOptions>(builder.Configuration.GetSection("SendGridOptions"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
//Must be called after .UseRouting() and before .UseAuthorization()
app.UseCors();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
