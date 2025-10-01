using ABP_TopCv.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ABP_TopCv.Permissions
{
    public class JobPermisssions : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup("Job");
            myGroup.AddPermission("Job_Create",
                LocalizableString.Create<ABP_TopCvResource>("Permission:Job.Create")
            );
            myGroup.AddPermission("Job_Update");
            myGroup.AddPermission("Job_Delete");
            myGroup.AddPermission("Job_GetList");
        }
    }
}
