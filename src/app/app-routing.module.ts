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
  // {
  //   path:'available', 
  //   loadChildren:() => import('./available/available.module').then(m=>m.AvailableModule)
  //   },
  //   {
  //         path:'add-property',
  //         loadChildren:() => import('./add-property/add-property.module').then(m=>m.AddPropertyModule)
  //       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
