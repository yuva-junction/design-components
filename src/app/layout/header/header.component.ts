import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  types:{label: string; value: string; }[];
  selectedType:string;


  constructor(private router:Router) {
    this.types = [
      {label: 'Apartment', value: 'Apartment'},
      {label: 'House', value: 'House'},
      {label: 'Studio', value: 'Studio'}
  ];
   }

  ngOnInit() {

  }
  /**
   * Method will navigate app to rented tab
  */
  loadAddProperty(){
    this.router.navigate(['main/add-property']);
  }

   /**
   * Method will navigate app to availbale tab
  */
  loadAvailbale(){
    this.router.navigate(['main/available']);
  }
}
