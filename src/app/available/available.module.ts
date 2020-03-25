import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableRoutingModule } from './available-routing.module';
import { AvailableComponent } from './available.component';

import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [AvailableComponent],
  imports: [
    HttpClientModule,
    CalendarModule,
    FileUploadModule,
    CommonModule,
    CommonModule,
    AvailableRoutingModule
  ]
})
export class AvailableModule { }
