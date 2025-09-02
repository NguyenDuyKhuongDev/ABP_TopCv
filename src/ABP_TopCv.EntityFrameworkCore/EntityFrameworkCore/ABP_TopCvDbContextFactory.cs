using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ABP_TopCv.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class ABP_TopCvDbContextFactory : IDesignTimeDbContextFactory<ABP_TopCvDbContext>
{
    public ABP_TopCvDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        ABP_TopCvEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<ABP_TopCvDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new ABP_TopCvDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ABP_TopCv.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
