import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  uploadedFiles: any[] = [];


  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  onBasicUploadAuto(event) {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}

}
