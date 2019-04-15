import { Component, ViewChild } from '@angular/core';
import { EmpServiceService } from './employee/emp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private empServ:EmpServiceService){

    
  }
  title = 'my-app';
  public isLoggedIn$=this.isLoggedIn$ = localStorage.getItem("loged");

  // this.empServ

  // IsLogedFlag:boolean=false;

  // IsLoged1(flag){
  //   alert(",,,")
  //   this.IsLogedFlag=flag;
  //   console.log(this.IsLogedFlag)
  // }





}
