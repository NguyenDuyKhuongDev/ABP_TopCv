using Volo.Abp.Modularity;

namespace ABP_TopCv;

[DependsOn(
    typeof(ABP_TopCvApplicationModule),
    typeof(ABP_TopCvDomainTestModule)
)]
public class ABP_TopCvApplicationTestModule : AbpModule
{

}
