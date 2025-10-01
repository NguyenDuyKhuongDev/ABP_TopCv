using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;

namespace ABP_TopCv.AdminSeeder
{
    public class AdminRolePermissionSeeder : IDataSeedContributor, ITransientDependency
    {
        private readonly IPermissionDefinitionManager _permissionDefinitionManager;
        private readonly IPermissionManager _permissionManager;
        private readonly IdentityRoleManager _roleManager;
        private readonly IGuidGenerator _guidGenerator;

        public AdminRolePermissionSeeder(
            IPermissionDefinitionManager permissionDefinitionManager,
            IPermissionManager permissionManager,
            IdentityRoleManager roleManager,
            IGuidGenerator guidGenerator)
        {
            _permissionDefinitionManager = permissionDefinitionManager;
            _permissionManager = permissionManager;
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

            var allPermission = await _permissionDefinitionManager.GetPermissionsAsync();
            foreach (var permission in allPermission)
            {
                if (permission.Providers.Any() &&
                    !permission.Providers.Contains(RolePermissionValueProvider.ProviderName))
                {
                    continue;
                }

                await _permissionManager.SetForRoleAsync("admin", permission.Name, true);
            }
        }
    }
}
