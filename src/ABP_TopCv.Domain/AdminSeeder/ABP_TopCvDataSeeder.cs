using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace ABP_TopCv.AdminSeeder
{
    public class ABP_TopCvDataSeeder : IDataSeedContributor, ITransientDependency
    {
        private readonly ABP_TopCvDataSeedContributor _adminUserContributor;

        public ABP_TopCvDataSeeder(ABP_TopCvDataSeedContributor adminUserContributor)
        {
            _adminUserContributor = adminUserContributor;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _adminUserContributor.SeedAsync(context);
        }
    }
}
