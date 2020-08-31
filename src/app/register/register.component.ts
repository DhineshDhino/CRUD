import { EmployeeService } from './../employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm;

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
  onSubmit(): void{
    if(this.registrationForm.status=="VALID"){
      this.employeeService.addEmployee(this.registrationForm.value);
      this.registrationForm.reset();
    }
    else{
      alert("Enter all fields");
    }
  }
}
