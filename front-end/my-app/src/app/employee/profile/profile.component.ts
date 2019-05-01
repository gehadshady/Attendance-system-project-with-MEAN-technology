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
  DailyAttedObj:Attendance;
  montlyAttendance:any=[];
  montlyExcuteTimes=0;
  montlyLateTimes=0;


  
  constructor(private empServ:EmpServiceService ) {
  }
  
    

  ngOnChanges(){}
  ngOnInit() {
    this.LoggeUser=(JSON.parse(localStorage.getItem("user")));

    this.empServ.getDialyReport(this.LoggeUser._id).subscribe(
      res=>{console.log(res);this.DailyAttedObj=res},
      err=>console.log(err.message),
      ()=>console.log(this.DailyAttedObj)
    )
      this.empServ.getMonthlyReport(this.LoggeUser._id).subscribe(
        res=>{console.log(res);this.montlyAttendance=res},
        err=>console.log(err.message),
        ()=>(
        this.montlyAttendance.forEach(element => {
           if(element.excuteTimes)
           ++this.montlyExcuteTimes;
           if(element.lateFalg)
           {
             console.log("wwww")
             ++this.montlyLateTimes;  
           }   
  
        }))
      )

  
    }

}
