import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  public isLoggedIn$:string
  ngOnInit() {
    this.isLoggedIn$ = localStorage.getItem("loged")

  }
 LoggeUser=(JSON.parse(localStorage.getItem("user")));

}
