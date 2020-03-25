import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPropertyRoutingModule } from './add-property-routing.module';
import { AddPropertyComponent } from './add-property.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [AddPropertyComponent],
  imports: [
    HttpClientModule,
    CalendarModule,
    FileUploadModule,
    CommonModule,
    AddPropertyRoutingModule
  ]
})
export class AddPropertyModule { }
