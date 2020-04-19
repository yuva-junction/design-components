import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {
  types:{label: string; value: string; }[];
  selectedType:string;
  items: MenuItem[];
  activeIndex: number = 0;
  title1:string;
  title2:string;

  constructor() { 
    this.types = [
      {label: 'Add', value: 'Add'},
      {label: 'View', value: 'View'},
  ];
  }

  ngOnInit() {
    this.selectedType = this.types[0].value;
    this.title1 = "PROPERTY INFO";
    this.title2 = "First let's cover the basics";
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
  ];
  }

  chnageData(){
    this.activeIndex = this.activeIndex+1;
    if(this.activeIndex==1){
      this.title1 = "STAKEHOLDER INFO";
      this.title2 = "Now let's cover your Broker info and Tenant info";
    }else if(this.activeIndex==2){
      this.title1 = "DEAL INFO";
      this.title2 = "Great! Now let's initiate the deal";
    } else{
      this.title1 = "PROPERTY INFO";
      this.title2 = "First let's cover the basics";
    }
  }

}
