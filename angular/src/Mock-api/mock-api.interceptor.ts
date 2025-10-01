import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs';

export const mockApiInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const url = (req.url || '').toLowerCase();
  console.log('[mockApiInterceptor]  INTERCEPTING:', req.method, req.url);
  
  // Log để debug
  console.log('[mockApiInterceptor]  Check config URL:', req.url.includes('/api/abp/application-configuration'));
  // --- OIDC discovery (mock) ---
  if (url.includes('/.well-known/openid-configuration') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          issuer: 'https://localhost:4200',
          authorization_endpoint: 'https://localhost:4200/connect/authorize',
          token_endpoint: 'https://localhost:4200/connect/token',
          userinfo_endpoint: 'https://localhost:4200/connect/userinfo',
          jwks_uri: 'https://localhost:4200/.well-known/jwks',
          response_types_supported: ['code'],
          subject_types_supported: ['public'],
          id_token_signing_alg_values_supported: ['RS256'],
        },
      })
    );
  }

  // --- JWKS (minimal mock) ---
  if (url.includes('/.well-known/jwks') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          keys: [
            {
              kty: 'RSA',
              kid: 'dev-key',
              use: 'sig',
              n: '0vx7agoebGcQSuuPiLJXZptN... (mock)',
              e: 'AQAB',
              alg: 'RS256',
            },
          ],
        },
      })
    );
  }

  // --- token endpoint (mock) ---
  if (url.includes('/connect/token') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          access_token: 'fake-access-token',
          expires_in: 3600,
          token_type: 'Bearer',
          scope: 'openid profile email',
        },
      })
    );
  }

  //===========Account=============
  if (req.url.endsWith('/api/account/login') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          accessToken: 'fake-jwt-token',
          expireInSeconds: 3600,
          userId: '11111111-1111-1111-1111-111111111111',
        },
      })
    );
  }

  if (req.url.endsWith('/api/account/register') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          id: '22222222-2222-2222-2222-222222222222',
          userName: req.body.userName,
          email: req.body.email,
          name: req.body.name,
          surname: req.body.surname,
        },
      })
    );
  }

  if (req.url.endsWith('/api/account/my-profile') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          id: '11111111-1111-1111-1111-111111111111',
          userName: 'mockuser',
          email: 'mockuser@test.com',
          name: 'Mock',
          surname: 'User',
          phoneNumber: '0123456789',
        },
      })
    );
  }

  if (req.url.endsWith('/api/account/my-profile') && req.method === 'PUT') {
    return of(
      new HttpResponse({
        status: 200,
        body: { ...req.body },
      })
    );
  }

  // ===== IDENTITY: USERS =====
  if (req.url.startsWith('/api/identity/users') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          totalCount: 3,
          items: [
            { 
              id: '11111111-1111-1111-1111-111111111111', 
              userName: 'admin', 
              email: 'admin@test.com',
              name: 'Admin',
              surname: 'User',
              isActive: true,
              roles: ['admin']
            },
            { 
              id: '22222222-2222-2222-2222-222222222222', 
              userName: 'alice', 
              email: 'alice@test.com',
              name: 'Alice',
              surname: 'Johnson',
              isActive: true,
              roles: ['user']
            },
            { 
              id: '33333333-3333-3333-3333-333333333333', 
              userName: 'bob', 
              email: 'bob@test.com',
              name: 'Bob',
              surname: 'Smith',
              isActive: true,
              roles: ['user']
            },
          ],
        },
      })
    );
  }

  if (req.url.endsWith('/api/identity/users') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: { 
          id: '44444444-4444-4444-4444-444444444444', 
          ...req.body,
          isActive: true,
          roles: ['user']
        },
      })
    );
  }

  if (req.url.match(/\/api\/identity\/users\/[^\/]+$/) && req.method === 'PUT') {
    return of(
      new HttpResponse({
        status: 200,
        body: { 
          ...req.body,
          isActive: true
        },
      })
    );
  }

  if (req.url.match(/\/api\/identity\/users\/[^\/]+$/) && req.method === 'DELETE') {
    return of(
      new HttpResponse({
        status: 200,
      })
    );
  }

  // ===== IDENTITY: ROLES =====
  if (req.url.startsWith('/api/identity/roles') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          totalCount: 3,
          items: [
            { 
              id: '11111111-1111-1111-1111-111111111111', 
              name: 'admin',
              isDefault: false,
              isStatic: true,
              isPublic: false
            },
            { 
              id: '22222222-2222-2222-2222-222222222222', 
              name: 'user',
              isDefault: true,
              isStatic: false,
              isPublic: true
            },
            { 
              id: '33333333-3333-3333-3333-333333333333', 
              name: 'manager',
              isDefault: false,
              isStatic: false,
              isPublic: false
            },
          ],
        },
      })
    );
  }

  if (req.url.endsWith('/api/identity/roles') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: { 
          id: '44444444-4444-4444-4444-444444444444', 
          ...req.body,
          isDefault: false,
          isStatic: false,
          isPublic: false
        },
      })
    );
  }

  if (req.url.match(/\/api\/identity\/roles\/[^\/]+$/) && req.method === 'PUT') {
    return of(
      new HttpResponse({
        status: 200,
        body: { 
          ...req.body,
        },
      })
    );
  }

  if (req.url.match(/\/api\/identity\/roles\/[^\/]+$/) && req.method === 'DELETE') {
    return of(
      new HttpResponse({
        status: 200,
      })
    );
  }

  // ===== PERMISSION =====
  if (req.url.startsWith('/api/permission-management/permissions') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          groups: [
            {
              name: 'Identity',
              displayName: 'Identity Management',
              permissions: [
                { name: 'AbpIdentity.Users', isGranted: true },
                { name: 'AbpIdentity.Roles', isGranted: false },
              ],
            },
          ],
        },
      })
    );
  }

  // ===== TENANTS =====
  if (req.url.startsWith('/api/multi-tenancy/tenants') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          totalCount: 1,
          items: [{ id: 't1', name: 'DefaultTenant' }],
        },
      })
    );
  }

  // ===== ABP APPLICATION CONFIGURATION =====
  //debugger;
  if (req.url.includes('/api/abp/application-configuration') && req.method === 'GET') {
    console.log('[mockApiInterceptor] ✅ HIT: ABP application-configuration endpoint');
    
    return of(
      new HttpResponse({
        status: 200,
        body: {
          application: {
            auth: {
              policies: {
                "ABP_TopCv.Books": true,
                "ABP_TopCv.Books.Create": true,
                "ABP_TopCv.Books.Edit": true,
                "ABP_TopCv.Books.Delete": true,
                "AbpIdentity.Users": true,
                "AbpIdentity.Users.Create": true,
                "AbpIdentity.Users.Update": true,
                "AbpIdentity.Users.Delete": true,
                "AbpIdentity.Roles": true,
                "AbpIdentity.Roles.Create": true,
                "AbpIdentity.Roles.Update": true,
                "AbpIdentity.Roles.Delete": true,
                "AbpTenantManagement.Tenants": true,
                "AbpTenantManagement.Tenants.Create": true,
                "AbpTenantManagement.Tenants.Update": true,
                "AbpTenantManagement.Tenants.Delete": true,
                "AbpSettingManagement": true,
                "AbpFeatureManagement": true,
                "AbpAccount": true
              },
              grantedPolicies: {
                "ABP_TopCv.Books": true,
                "ABP_TopCv.Books.Create": true,
                "ABP_TopCv.Books.Edit": true,
                "ABP_TopCv.Books.Delete": true,
                "AbpIdentity.Users": true,
                "AbpIdentity.Users.Create": true,
                "AbpIdentity.Users.Update": true,
                "AbpIdentity.Users.Delete": true,
                "AbpIdentity.Roles": true,
                "AbpIdentity.Roles.Create": true,
                "AbpIdentity.Roles.Update": true,
                "AbpIdentity.Roles.Delete": true,
                "AbpTenantManagement.Tenants": true,
                "AbpTenantManagement.Tenants.Create": true,
                "AbpTenantManagement.Tenants.Update": true,
                "AbpTenantManagement.Tenants.Delete": true,
                "AbpSettingManagement": true,
                "AbpFeatureManagement": true,
                "AbpAccount": true
              }
            }
          },
          currentUser: {
            isAuthenticated: true,
            id: '11111111-1111-1111-1111-111111111111',
            userName: 'mockuser',
            email: 'mockuser@test.com',
            name: 'Mock',
            surname: 'User',
            roles: ['admin'],
            modules: ['book', 'identity', 'tenant-management', 'setting-management', 'feature-management']
          },
          setting: {
            values: {}
          },
          localization: {
            currentCulture: {
              displayName: "English",
              englishName: "English", 
              nativeName: "English",
              twoLetterIsoLanguageName: "en",
              threeLetterIsoLanguageName: "eng"
            },
            supportedCultures: [
              {
                displayName: "English",
                englishName: "English",
                nativeName: "English", 
                twoLetterIsoLanguageName: "en",
                threeLetterIsoLanguageName: "eng"
              }
            ]
          }
        },
      })
    ).pipe(tap(res=> console.log("[MOCK- API RESPONSE: ]",res)));
  }



  // ===== ABP BOOKS API =====
  if (req.url.includes('/api/app/book') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          totalCount: 3,
          items: [
            {
              id: '00000000-0000-0000-0000-000000000001',
              name: 'Mock Book 1',
              type: 1,
              publishDate: '2024-01-15',
              price: 29.99
            },
            {
              id: '00000000-0000-0000-0000-000000000002', 
              name: 'Mock Book 2',
              type: 2,
              publishDate: '2024-02-20',
              price: 39.99
            },
            {
              id: '00000000-0000-0000-0000-000000000003',
              name: 'Mock Book 3', 
              type: 1,
              publishDate: '2024-03-10',
              price: 19.99
            }
          ]
        },
      })
    );
  }

  // Mock POST /api/app/book (create)
  if (req.url.includes('/api/app/book') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          id: '00000000-0000-0000-0000-000000000004',
          ...req.body,
          creationTime: new Date().toISOString(),
        },
      })
    );
  }

  // Mock PUT /api/app/book/{id} (update)
  if (req.url.match(/\/api\/app\/book\/[^\/]+$/) && req.method === 'PUT') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          ...req.body,
          lastModificationTime: new Date().toISOString(),
        },
      })
    );
  }

  // Mock DELETE /api/app/book/{id}
  if (req.url.match(/\/api\/app\/book\/[^\/]+$/) && req.method === 'DELETE') {
    return of(
      new HttpResponse({
        status: 200,
      })
    );
  }

  // ===== TENANT MANAGEMENT =====
  if (req.url.includes('/api/multi-tenancy/tenants') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          totalCount: 2,
          items: [
            { 
              id: '00000000-0000-0000-0000-000000000001',
              name: 'Default',
              adminEmailAddress: 'admin@default.com',
              isActive: true,
              editionId: null
            },
            { 
              id: '00000000-0000-0000-0000-000000000002',
              name: 'Tenant1',
              adminEmailAddress: 'admin@tenant1.com',
              isActive: true,
              editionId: null
            }
          ]
        }
      })
    );
  }

  if (req.url.includes('/api/multi-tenancy/tenants') && req.method === 'POST') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          id: '00000000-0000-0000-0000-000000000003',
          ...req.body,
          isActive: true
        }
      })
    );
  }

  // ===== SETTING MANAGEMENT =====
  if (req.url.includes('/api/setting-management/settings') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          groups: [
            {
              name: 'Abp.Localization',
              displayName: 'Localization',
              properties: [
                { name: 'Abp.Localization.DefaultLanguageName', value: 'en', description: 'Default language' }
              ]
            },
            {
              name: 'Abp.Security',
              displayName: 'Security',
              properties: [
                { name: 'Abp.Security.Password.RequireDigit', value: 'true', description: 'Require digit' }
              ]
            }
          ]
        }
      })
    );
  }

  if (req.url.includes('/api/setting-management/settings') && req.method === 'PUT') {
    return of(
      new HttpResponse({
        status: 200,
        body: { success: true }
      })
    );
  }

  // ===== FEATURE MANAGEMENT =====
  if (req.url.includes('/api/feature-management/features') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          groups: [
            {
              name: 'Abp.Account',
              displayName: 'Account',
              features: [
                { name: 'Abp.Account.EnableSelfRegistration', value: 'true', description: 'Enable self registration' }
              ]
            }
          ]
        }
      })
    );
  }

  // ===== LOCALIZATION =====
  if (req.url.includes('/api/abp/application-localization') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          resources: {
            'ABP_TopCv': {
              texts: {
                '::Menu:Books': 'Books',
                '::NewBook': 'New Book',
                '::Name': 'Name',
                '::Type': 'Type',
                '::PublishDate': 'Publish Date',
                '::Price': 'Price',
                '::Actions': 'Actions',
                '::Edit': 'Edit',
                '::Delete': 'Delete',
                '::Save': 'Save',
                '::Close': 'Close',
                '::LongWelcomeMessage': 'Welcome to ABP_TopCv application!',
                '::Enum:BookType.1': 'Adventure',
                '::Enum:BookType.2': 'Biography',
                '::Enum:BookType.3': 'Dystopia',
                '::Enum:BookType.4': 'Fantastic',
                '::Enum:BookType.5': 'Horror',
                '::Enum:BookType.6': 'Science',
                '::Enum:BookType.7': 'Science fiction',
                '::Enum:BookType.8': 'Poetry'
              }
            },
            'AbpAccount': {
              texts: {
                'Login': 'Login',
                'Register': 'Register',
                'UserName': 'User Name',
                'Password': 'Password',
                'RememberMe': 'Remember Me'
              }
            }
          }
        }
      })
    );
  }

  // Debug log để kiểm tra
  console.log('[mockApiInterceptor] ❓ NO MATCH - passing through:', req.method, req.url);
  
  // Nếu không match mock API → cho request đi tiếp
  return next(req);
};
