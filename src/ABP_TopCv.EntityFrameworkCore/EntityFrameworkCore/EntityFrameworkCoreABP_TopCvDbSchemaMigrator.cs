using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ABP_TopCv.Data;
using Volo.Abp.DependencyInjection;

namespace ABP_TopCv.EntityFrameworkCore;

public class EntityFrameworkCoreABP_TopCvDbSchemaMigrator
    : IABP_TopCvDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreABP_TopCvDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the ABP_TopCvDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ABP_TopCvDbContext>()
            .Database
            .MigrateAsync();
    }
}
