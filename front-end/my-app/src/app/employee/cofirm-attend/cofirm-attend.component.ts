import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmpServiceService } from '../emp-service.service';
import { Attendance } from 'src/app/attendance';

@Component({
  selector: 'app-cofirm-attend',
  templateUrl: './cofirm-attend.component.html',
  styleUrls: ['./cofirm-attend.component.css']
})
export class CofirmAttendComponent implements OnInit {

  constructor(private empServ:EmpServiceService) { }

  ngOnInit() {}
    

  Emp=new Employee();
  toDayAttend=new Attendance();

  confAttnd(){
    
    this.toDayAttend.Date=new Date().toLocaleDateString()
    this.toDayAttend.attenTime=new Date().toLocaleTimeString();
    this.toDayAttend.employee=JSON.parse(localStorage.getItem("user"))._id;
    if(new Date(this.toDayAttend.Date+" "+"21:00:00 ").getTime()<new Date().getTime())
    {
      this.toDayAttend.lateFalg=true
    }
    else{
      this.toDayAttend.lateFalg=false

    }


    this.empServ.getEmp(this.toDayAttend).subscribe(
      res=>{console.log(res);},
      err=>{console.log(err)},
      ()=>{}
    )
    }

}




///////////////////
// import { Component, OnInit } from '@angular/core';
// import { Employee } from 'src/app/employee';
// import { EmpServiceService } from '../emp-service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private empServ:EmpServiceService) { }

//   ngOnInit() {
//   }

//   Emp=new Employee();
//   loginDate;
//   Login(EmpMail){
//     console.log(EmpMail);
//     this.loginDate=new Date().toTimeString().split(" ")[0];
//     this.empServ.getEmp(this.Emp.Email).subscribe(
//       res=>{this.Emp=res;console.log(this.Emp);},
//       err=>{console.log(err)},
//       ()=>{}
//     )


//   }
// }
