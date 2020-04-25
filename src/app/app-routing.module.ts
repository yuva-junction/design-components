import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootDashboardComponent } from './root-dashboard/root-dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:RootDashboardComponent,
  },
  {
    path:'main',
    loadChildren:()=> import('./layout/layout.module').then(m=>m.LayoutModule)
  },
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
