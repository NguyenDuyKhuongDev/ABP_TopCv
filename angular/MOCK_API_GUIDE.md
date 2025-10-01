# 🚀 Mock API Guide - ABP_TopCv

## 📋 Tổng quan
Dự án đã được cấu hình để chạy hoàn toàn với mock data mà không cần backend. Tất cả APIs đã được mock để Frontend team có thể develop và test.

## 🎯 Cách sử dụng

### 1. **Khởi động ứng dụng**
```bash
cd angular
npm start
# hoặc
ng serve
```

### 2. **Truy cập Mock Dashboard**
- Mở browser: `http://localhost:4200`
- Click "🚀 Go to Mock Dashboard" trên trang chủ
- Hoặc truy cập trực tiếp: `http://localhost:4200/mock-dashboard`

### 3. **Test các pages**
Từ Mock Dashboard, bạn có thể test:
- ✅ **Home Page** - Trang chủ
- ✅ **Books Management** - CRUD sách (Create, Read, Update, Delete)
- ✅ **Identity Users** - Quản lý người dùng
- ✅ **Identity Roles** - Quản lý vai trò
- ✅ **Tenant Management** - Quản lý đa tenant
- ✅ **Setting Management** - Cài đặt hệ thống
- ✅ **Account Management** - Login, register, profile

## 🔧 Mock Data có sẵn

### **Books**
- 3 books mẫu với đầy đủ thông tin
- CRUD operations hoạt động đầy đủ
- Form validation và date picker

### **Identity Users**
- 3 users: admin, alice, bob
- Đầy đủ thông tin: name, email, roles
- CRUD operations

### **Identity Roles**
- 3 roles: admin, user, manager
- Role management đầy đủ

### **Tenants**
- 2 tenants mẫu
- Tenant CRUD operations

### **Settings & Features**
- System settings mock
- Feature management mock

## 🎨 UI Features

### **Authentication Status**
- User được mock là authenticated = true
- Full permissions cho tất cả modules
- User info: mockuser@test.com

### **Localization**
- English localization
- Tất cả text keys đã được mock
- Book types enum đầy đủ

### **Responsive Design**
- Bootstrap-based UI
- Mobile-friendly
- ABP Theme Lepton-X

## 🛠️ Technical Details

### **Mock Configuration**
- File: `src/Mock-api/mock-api.interceptor.ts`
- Environment: `src/environments/environment.ts`
- `useMockApi: true` - Enable mock mode

### **API Endpoints Mocked**
```
✅ /api/abp/application-configuration
✅ /api/app/book (CRUD)
✅ /api/identity/users (CRUD)
✅ /api/identity/roles (CRUD)
✅ /api/multi-tenancy/tenants (CRUD)
✅ /api/setting-management/settings
✅ /api/feature-management/features
✅ /api/account/* (login, register, profile)
✅ /api/permission-management/permissions
✅ /api/abp/application-localization
✅ /.well-known/openid-configuration
✅ /.well-known/jwks
✅ /connect/token
```

## 🔍 Debug & Troubleshooting

### **Console Logs**
Mở DevTools → Console để xem:
```
[mockApiInterceptor] INTERCEPTING: GET /api/abp/application-configuration
[mockApiInterceptor] ✅ HIT: ABP application-configuration endpoint
```

### **Common Issues**
1. **Interceptor không chạy**: Kiểm tra `useMockApi: true` trong environment
2. **Permission denied**: Đảm bảo user authenticated = true trong mock config
3. **API errors**: Kiểm tra console logs để debug

### **Switch to Real Backend**
Để chuyển về backend thật:
```typescript
// src/environments/environment.ts
const useMockApi = false; // ← Change to false
```

## 📝 Development Notes

### **Thêm Mock Data mới**
1. Mở `src/Mock-api/mock-api.interceptor.ts`
2. Thêm endpoint mới trong function
3. Follow pattern có sẵn

### **Thêm Page mới**
1. Tạo component mới
2. Thêm route trong `app.routes.ts`
3. Thêm mock APIs cần thiết
4. Update Mock Dashboard

## 🎉 Ready to Develop!

Bây giờ bạn có thể:
- ✅ Develop frontend mà không cần backend
- ✅ Test tất cả features
- ✅ Demo cho stakeholders
- ✅ UI/UX testing
- ✅ Integration testing với mock data

**Happy Coding! 🚀**

