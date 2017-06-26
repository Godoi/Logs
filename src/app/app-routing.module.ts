import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChangeComponent } from './change/change.component';
import { ChangeResolver } from './change/change.resolver';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'change',
    component: ChangeComponent,
    canActivate: [AuthGuard],
    resolve: {fetchData: ChangeResolver }
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
