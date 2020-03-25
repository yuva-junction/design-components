import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableComponent } from './available.component';


const routes: Routes = [
  {
    path:'',
    component:AvailableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailableRoutingModule { }
