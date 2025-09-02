using ABP_TopCv.Samples;
using Xunit;

namespace ABP_TopCv.EntityFrameworkCore.Domains;

[Collection(ABP_TopCvTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<ABP_TopCvEntityFrameworkCoreTestModule>
{

}
