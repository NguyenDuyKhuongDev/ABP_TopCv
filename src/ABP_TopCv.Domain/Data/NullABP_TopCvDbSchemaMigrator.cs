using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ABP_TopCv.Data;

/* This is used if database provider does't define
 * IABP_TopCvDbSchemaMigrator implementation.
 */
public class NullABP_TopCvDbSchemaMigrator : IABP_TopCvDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
