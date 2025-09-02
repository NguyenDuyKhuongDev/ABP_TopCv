using ABP_TopCv.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ABP_TopCv.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ABP_TopCvController : AbpControllerBase
{
    protected ABP_TopCvController()
    {
        LocalizationResource = typeof(ABP_TopCvResource);
    }
}
