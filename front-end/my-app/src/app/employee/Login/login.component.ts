import { Component, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmpServiceService } from '../emp-service.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private empServ:EmpServiceService , private router:Router) { }

  ngOnInit() {
  }

  gotoProfile(){
    this.router.navigate(['/Profile'])
  }
  // isLogedFlag:boolean=false;
  // @Output() IsLoged:EventEmitter<boolean>=new EventEmitter<boolean>();

  // OnLogin(){
  //   this.IsLoged.emit(this.isLogedFlag);
  // }

  Emp=new Employee();
  LoggedUser=new Employee();


  Login(formData){
    console.log(formData)
    this.empServ.login(formData).subscribe(
      res=>{console.log(res);this.LoggedUser=res},
      err=>alert("invalid name or email"),
      ()=>{
        alert("login successfully");
        localStorage.setItem("user",JSON.stringify(this.LoggedUser));
        this.gotoProfile()
      }

    )
  }


}
