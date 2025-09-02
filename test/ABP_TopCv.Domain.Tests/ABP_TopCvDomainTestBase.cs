using Volo.Abp.Modularity;

namespace ABP_TopCv;

/* Inherit from this class for your domain layer tests. */
public abstract class ABP_TopCvDomainTestBase<TStartupModule> : ABP_TopCvTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
