import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'painel', pathMatch: 'full' },
  {
    path: 'painel',
    component: HorizontalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent },
    ],
  },
];
