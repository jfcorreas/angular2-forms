import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-custom-validator-directive',
  templateUrl: './custom-validator-directive.component.html',
  styleUrls: ['./custom-validator-directive.component.css']
})
export class CustomValidatorDirectiveComponent implements OnInit {

  constructor() { }

  public user: User;

  ngOnInit() {
    this.user = {
      name: '',
      address: {
         street: '',
         postcode: '8000'
      },      
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
