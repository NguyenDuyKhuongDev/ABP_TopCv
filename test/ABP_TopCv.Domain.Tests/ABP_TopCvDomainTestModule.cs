using Volo.Abp.Modularity;

namespace ABP_TopCv;

[DependsOn(
    typeof(ABP_TopCvDomainModule),
    typeof(ABP_TopCvTestBaseModule)
)]
public class ABP_TopCvDomainTestModule : AbpModule
{

}
