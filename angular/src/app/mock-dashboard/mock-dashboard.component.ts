import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mock-dashboard',
  template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <h2>🚀 Mock Dashboard - Test All Pages</h2>
          <p class="text-muted">Click vào các links bên dưới để test tất cả các pages với mock data:</p>
        </div>
      </div>
      
      <div class="row">
        <!-- Home Page -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-home fa-3x text-primary mb-3"></i>
              <h5 class="card-title">Home Page</h5>
              <p class="card-text">Trang chủ với welcome message</p>
              <a routerLink="/" class="btn btn-primary">Go to Home</a>
            </div>
          </div>
        </div>

        <!-- Books Page -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-book fa-3x text-success mb-3"></i>
              <h5 class="card-title">Books Management</h5>
              <p class="card-text">CRUD operations cho quản lý sách</p>
              <a routerLink="/books" class="btn btn-success">Go to Books</a>
            </div>
          </div>
        </div>

        <!-- Identity Users -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-users fa-3x text-info mb-3"></i>
              <h5 class="card-title">Identity Users</h5>
              <p class="card-text">Quản lý người dùng trong hệ thống</p>
              <a routerLink="/identity/users" class="btn btn-info">Go to Users</a>
            </div>
          </div>
        </div>

        <!-- Identity Roles -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-user-shield fa-3x text-warning mb-3"></i>
              <h5 class="card-title">Identity Roles</h5>
              <p class="card-text">Quản lý vai trò và quyền hạn</p>
              <a routerLink="/identity/roles" class="btn btn-warning">Go to Roles</a>
            </div>
          </div>
        </div>

        <!-- Tenant Management -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-building fa-3x text-secondary mb-3"></i>
              <h5 class="card-title">Tenant Management</h5>
              <p class="card-text">Quản lý đa tenant</p>
              <a routerLink="/tenant-management/tenants" class="btn btn-secondary">Go to Tenants</a>
            </div>
          </div>
        </div>

        <!-- Setting Management -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-cog fa-3x text-dark mb-3"></i>
              <h5 class="card-title">Setting Management</h5>
              <p class="card-text">Cài đặt hệ thống</p>
              <a routerLink="/setting-management" class="btn btn-dark">Go to Settings</a>
            </div>
          </div>
        </div>

        <!-- Account Pages -->
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fa fa-user fa-3x text-danger mb-3"></i>
              <h5 class="card-title">Account Management</h5>
              <p class="card-text">Quản lý tài khoản, login, register</p>
              <a routerLink="/account/login" class="btn btn-danger">Go to Account</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Status Info -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="alert alert-success">
            <h6><i class="fa fa-check-circle"></i> Mock API Status</h6>
            <ul class="mb-0">
              <li>✅ Books CRUD APIs</li>
              <li>✅ Identity Users & Roles APIs</li>
              <li>✅ Tenant Management APIs</li>
              <li>✅ Setting Management APIs</li>
              <li>✅ Feature Management APIs</li>
              <li>✅ Account Management APIs</li>
              <li>✅ Localization APIs</li>
              <li>✅ Application Configuration APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [RouterLink]
})
export class MockDashboardComponent {}

