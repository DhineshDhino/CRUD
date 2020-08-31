import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  selectedEmployee: Employee;
  show: boolean;
  constructor(public employeeService: EmployeeService) { 
    
  }

  ngOnInit(): void {
  }
  updateEmployee(employee){
    this.show=true;
    this.selectedEmployee= employee;
  }

  onNotify(employee: Employee){
    this.show=false;
    this.employeeService.updateEmployee(employee);
  }

}
