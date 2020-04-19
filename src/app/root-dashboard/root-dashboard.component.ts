import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-dashboard',
  templateUrl: './root-dashboard.component.html',
  styleUrls: ['./root-dashboard.component.css']
})
export class RootDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /**
   * Method will navigate app to rented tab
  */
 loadHome(){
  this.router.navigate(['main']);
}

}
