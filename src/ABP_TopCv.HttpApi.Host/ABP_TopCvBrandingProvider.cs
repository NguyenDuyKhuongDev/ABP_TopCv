using Microsoft.Extensions.Localization;
using ABP_TopCv.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ABP_TopCv;

[Dependency(ReplaceServices = true)]
public class ABP_TopCvBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<ABP_TopCvResource> _localizer;

    public ABP_TopCvBrandingProvider(IStringLocalizer<ABP_TopCvResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
