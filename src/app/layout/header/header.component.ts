import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items3: MenuItem[];


  constructor(private router:Router) { }

  ngOnInit() {

  }
  /**
   * Method will navigate app to rented tab
  */
  loadAddProperty(){
    this.router.navigate(['/add-property']);
  }

   /**
   * Method will navigate app to availbale tab
  */
  loadAvailbale(){
    this.router.navigate(['/available']);
  }
}
