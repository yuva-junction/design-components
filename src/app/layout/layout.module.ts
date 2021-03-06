import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
// import {MenuItem} from 'primeng/api';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CardModule} from 'primeng/card';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutComponent, DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    LayoutRoutingModule,
    TabMenuModule,
    InputTextModule,
    SelectButtonModule
  ]
})
export class LayoutModule { }
