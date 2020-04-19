import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  items3: MenuItem[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.items3 = [
      {label: 'Info', icon: 'fa fa-fw fa-bar-chart', routerLink:'add-property'},
      {label: 'Message', icon: 'fa fa-fw fa-calendar', routerLink:'message'}
  ];

  }

  /**
   * Method will negivate to home page 
  */

  loadHome(){
    this.router.navigate(['']);
  }

}
