using ABP_TopCv.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace ABP_TopCv.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ABP_TopCvEntityFrameworkCoreModule),
    typeof(ABP_TopCvApplicationContractsModule)
)]
public class ABP_TopCvDbMigratorModule : AbpModule
{
}
