using ABP_TopCv.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace ABP_TopCv.DbMigrator
{
    public class ABP_TopCvDbMigrationService:ITransientDependency
    {
        private readonly ABP_TopCvDbContext _context;
        private readonly IDataSeeder _dataSeeder;

        public ABP_TopCvDbMigrationService(ABP_TopCvDbContext context, IDataSeeder dataSeeder)
        {
            _context = context;
            _dataSeeder = dataSeeder;
        }

        public async Task MigrateAsync() {
            await _context.Database.MigrateAsync();

            await _dataSeeder.SeedAsync();
        }
    }
}
