using ABP_TopCv.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace ABP_TopCv.Permissions;

public class ABP_TopCvPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ABP_TopCvPermissions.GroupName);

        var booksPermission = myGroup.AddPermission(ABP_TopCvPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(ABP_TopCvPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(ABP_TopCvPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(ABP_TopCvPermissions.Books.Delete, L("Permission:Books.Delete"));
        //Define your own permissions here. Example:
        //myGroup.AddPermission(ABP_TopCvPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ABP_TopCvResource>(name);
    }
}
