using ABP_TopCv.Samples;
using Xunit;

namespace ABP_TopCv.EntityFrameworkCore.Applications;

[Collection(ABP_TopCvTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<ABP_TopCvEntityFrameworkCoreTestModule>
{

}
