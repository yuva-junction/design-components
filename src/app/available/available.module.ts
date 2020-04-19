import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableRoutingModule } from './available-routing.module';
import { AvailableComponent } from './available.component';

import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {StepsModule} from 'primeng/steps';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  declarations: [AvailableComponent],
  imports: [
    HttpClientModule,
    CalendarModule,
    FileUploadModule,
    CommonModule,
    CommonModule,
    AvailableRoutingModule,
    SelectButtonModule,
    StepsModule,
    FormsModule,
    RadioButtonModule
  ]
})
export class AvailableModule { }
