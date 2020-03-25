import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'add-property',
        loadChildren:() => import('../add-property/add-property.module').then(m=>m.AddPropertyModule)
      },
      {
        path:'available',
        loadChildren:() => import('../available/available.module').then(m=>m.AvailableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
