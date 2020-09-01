import { EmployeeService } from './../employee.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm;

  @Output() addingEmp= new EventEmitter<Employee>(); 


  constructor(private fb: FormBuilder,private employeeService: EmployeeService) {
    this.registrationForm = this.fb.group({
      empId: ['',Validators.required],
      name: ['',Validators.required],
      gender: ['',Validators.required],
      address: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  
  addClick(){
    console.log("Add Click called");
    if(!(this.registrationForm.status == "INVALID")){
      this.addingEmp.emit(this.registrationForm.value);
    }else{
      alert("Enter All Fields");
    }
    this.registrationForm.reset();
  }


}
