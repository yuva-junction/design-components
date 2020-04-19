import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPropertyRoutingModule } from './add-property-routing.module';
import { AddPropertyComponent } from './add-property.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [AddPropertyComponent],
  imports: [
    HttpClientModule,
    CalendarModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    CommonModule,
    AddPropertyRoutingModule
  ],
  providers: [MessageService]
})
export class AddPropertyModule { }
