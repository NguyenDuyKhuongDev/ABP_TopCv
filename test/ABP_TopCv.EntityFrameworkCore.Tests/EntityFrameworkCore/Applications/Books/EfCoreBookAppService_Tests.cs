using ABP_TopCv.Books;
using Xunit;

namespace ABP_TopCv.EntityFrameworkCore.Applications.Books;

[Collection(ABP_TopCvTestConsts.CollectionDefinitionName)]
public class EfCoreBookAppService_Tests : BookAppService_Tests<ABP_TopCvEntityFrameworkCoreTestModule>
{

}