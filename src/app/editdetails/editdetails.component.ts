import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  @Input() employee : Employee;
  @Input() show: boolean;
  @Output() notify= new EventEmitter<Employee>();
  editForm;
  

  constructor(private fb: FormBuilder,private employeeService: EmployeeService) {
    this.editForm= this.fb.group({
      empId: '',
      name: '',
      gender: '',
      address: ''
    });
   }
   ngOnInit(): void{

   }

  ngOnChanges(): void {
    if(this.show){
      this.editForm.patchValue({
        empId: this.employee.empId,
        name: this.employee.name,
        gender: this.employee.gender,
        address: this.employee.address
      });
    }
  }
}
