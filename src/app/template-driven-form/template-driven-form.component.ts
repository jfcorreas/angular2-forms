import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})

export class TemplateDrivenFormComponent implements OnInit {
  public user: User;

  ngOnInit() {
    this.user = {
      name: '',
        address: {
         street: '',
         postcode: '8000'
      }
    };
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }
}
