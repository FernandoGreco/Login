import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
  canActivate: [AuthGuard]
 },
  { path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent,
    canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
