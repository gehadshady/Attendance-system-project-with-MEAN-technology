import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Employee } from 'src/app/Employee';
import { Attendance } from 'src/app/attendance';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  LoggeUser:Employee;
  attedObj:Attendance;
  
  constructor(private empServ:EmpServiceService ) {

    this.LoggeUser=(JSON.parse(localStorage.getItem("user")));
    this.empServ.getDialyReport(this.LoggeUser._id).subscribe(
      res=>{console.log(res);this.attedObj=res},
      err=>console.log(err.message),
      ()=>console.log(this.attedObj)
    )
   }
  
  ngOnChanges(){}
  ngOnInit() {
  
  }


}
