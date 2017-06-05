import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer.interface';


@Component({
  selector: 'app-nested-model-driven-form',
  templateUrl: './nested-model-driven-form.component.html',
  styleUrls: ['./nested-model-driven-form.component.css']
})
export class NestedModelDrivenFormComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
  }
  initAddress() {
          // initialize our address
          return this._fb.group({
              street: ['', Validators.required],
              postcode: ['']
          });
  }

  addAddress() {
      // add address to the list
      const control = <FormArray>this.myForm.controls['addresses'];
      control.push(this.initAddress());
  }

  removeAddress(i: number) {
      // remove address from the list
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
      // call API to save customer
      console.log(model);
  }
}
