import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  uploadedFiles: any[] = [];


  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }

}
