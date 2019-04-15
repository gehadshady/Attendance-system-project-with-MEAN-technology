import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import {EmpServiceService} from '../emp-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private empServ:EmpServiceService) { }

  ngOnInit() {
  }
  showFirst=true;
  newEmp=new Employee();

  addEmp(emp){
   //console.log(emp)
    this.empServ.AddEmp(emp).subscribe(
      data=>console.log(data),
      err=>console.log(err.message),
      ()=>{alert("done!");this.showFirst=false}

    )

  }
}
