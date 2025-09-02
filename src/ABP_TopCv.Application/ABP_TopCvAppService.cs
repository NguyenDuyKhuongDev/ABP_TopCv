using ABP_TopCv.Localization;
using Volo.Abp.Application.Services;

namespace ABP_TopCv;

/* Inherit your application services from this class.
 */
public abstract class ABP_TopCvAppService : ApplicationService
{
    protected ABP_TopCvAppService()
    {
        LocalizationResource = typeof(ABP_TopCvResource);
    }
}
