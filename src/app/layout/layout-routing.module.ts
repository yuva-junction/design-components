import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RootDashboardComponent } from '../root-dashboard/root-dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'available', 
        loadChildren:() => import('../available/available.module').then(m=>m.AvailableModule)
      },
      {
        path:'add-property',
        loadChildren:() => import('../add-property/add-property.module').then(m=>m.AddPropertyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
