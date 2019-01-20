import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	regiForm:FormGroup;
  	FirstName:String='';
  

  constructor(private fb: FormBuilder) { 
	this.regiForm=fb.group({
		'FirstName':[null,Validators.required],
		'LastName':[null,Validators.required],
		'Email':[null, Validators.compose([Validators.required,Validators.email])],
		'IsAccepted':[null]
	});
  }

  ngOnInit() {
  }




}
