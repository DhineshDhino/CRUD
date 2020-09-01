import { EmployeeService } from './../employee.service';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Employee } from '../employee';
import { MatTableDataSource, MatTable } from '@angular/material/table';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  selectedEmployee: Employee;
  show: boolean;

  @Input() employeesCopy: Employee[];
  dsEmployees: MatTableDataSource<Employee>;
  @ViewChild(MatTable) table: MatTable<Employee>;
  displayedColumns: string[]=["empId","name","gender","address","actions"];

  constructor(public employeeService: EmployeeService) { 
    this.dsEmployees= new MatTableDataSource<Employee>(this.employeesCopy);

  }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
    console.log("OnChangeCalled");
    if(this.table){
      this.table.renderRows();
    }
  }

  updateEmployee(employee: Employee){

    this.show=true;
    this.selectedEmployee= employee;
  }

  onNotify(employee: Employee){
    this.show=false;
    this.employeeService.updateEmployee(employee);

    if(this.table){
      this.table.renderRows();
    }
  }

  addEmp(employee: Employee): void{
      console.log("Add Called");
      this.employeeService.addEmployee(employee);
      if(this.table){
        this.table.renderRows();
      }
  }

  deleteEmployee(employee: Employee){
    this.employeeService.deleteEmployee(employee);
    if(this.table){
      this.table.renderRows();
    }
    

  }

}
