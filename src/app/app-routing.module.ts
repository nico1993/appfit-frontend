//Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    // canActivate: [LoginGuard],
    loadChildren: './components/pages/pages.module#PagesModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/admin',
    component: LoginAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
