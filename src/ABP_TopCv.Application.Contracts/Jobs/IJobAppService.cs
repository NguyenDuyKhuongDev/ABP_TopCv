using ABP_TopCv.Job;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace ABP_TopCv.Jobs
{
    public interface IJobAppService : ICrudAppService<JobDto, int, PagedAndSortedResultRequestDto, CreateUpdateJobDto>
    {
    }
}
