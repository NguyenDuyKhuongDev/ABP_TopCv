using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.Uow;

namespace ABP_TopCv.AdminSeeder
{
    public class ABP_TopCvDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IdentityUserManager _userManager;
        private readonly IdentityRoleManager _roleManager;
        private readonly IGuidGenerator _guidGenerator;

        public ABP_TopCvDataSeedContributor(
            IdentityUserManager userManager,
            IdentityRoleManager roleManager,
            IGuidGenerator guidGenerator)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _guidGenerator = guidGenerator;
        }

        [UnitOfWork]
        public async Task SeedAsync(DataSeedContext context)
        {
            var adminRole = await _roleManager.FindByNameAsync("admin");
            if (adminRole == null)
            {
                adminRole = new IdentityRole(_guidGenerator.Create(), "admin");
                await _roleManager.CreateAsync(adminRole);
            }

            var adminUser = await _userManager.FindByNameAsync("admin");
            if (adminUser == null)
            {
                adminUser = new IdentityUser(
                    _guidGenerator.Create(),
                    "admin",
                    "admin@mydomain.com"
                );

                await _userManager.CreateAsync(adminUser, "1q2w3E*");
                await _userManager.AddToRoleAsync(adminUser, "admin");
            }
        }
    }
}
