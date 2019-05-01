import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../Employee'
import { Attendance } from '../attendance';



@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  
  public curentLogedEmp=new Employee();

  private loggedIn ;

  get isLoggedIn(){
    return this.loggedIn;
  }


  constructor(private http: HttpClient) { }
  url:string = "http://localhost:8080/employee";

  AddEmp(emp:Employee){
   

    return this.http.post(this.url+"/register",emp);
  }

  getEmp(toDayAttend:Attendance){
    
    return this.http.post(this.url+"/CofirmAttend",toDayAttend)
  }

  login(formData){
    return  this.http.post(this.url+"/Login",formData);
  }

  getDialyReport(id){
    return this.http.get(this.url+"/dailyReport/"+id)
  }
  
  getMonthlyReport(id){
    return this.http.get(this.url+"/monthlyReport/"+id)
  }
  

  // getLoged(){
  //   return this.http.get(this.url+"/Login");
  // }


}
