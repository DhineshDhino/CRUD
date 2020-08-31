import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[]=[];
  constructor() { }

  addEmployee(employee){
    this.employees.push(employee);
    console.log("Employee Addedd Successfully!");
  }

  updateEmployee(employee){
    for(let index=0;index<this.employees.length;index++){
      if(this.employees[index].empId==employee.empId){
        this.employees[index] = employee;
      }
    };
    console.log("Employee Updated Successfully!");
  }

  deleteEmployee(selectedEmployee){
    const index: number=this.employees.indexOf(selectedEmployee);
    this.employees.splice(index,1);
    console.log("Employee Deleted Successfully!");
  }
}
