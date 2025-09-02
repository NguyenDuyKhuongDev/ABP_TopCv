using System.Threading.Tasks;

namespace ABP_TopCv.Data;

public interface IABP_TopCvDbSchemaMigrator
{
    Task MigrateAsync();
}
