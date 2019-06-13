
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { Message } from './../Clasess/Clasess';
import { AddMessage } from './../ngrx/message.action';
import { AppState } from './../ngrx/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 form: FormGroup;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(null, Validators.required)
    });
  }

  onSubmit(f: FormGroupDirective){
    if (this.form.valid) {
      const message = new Message(
        this.form.get('message').value
      )
      
      this.store.dispatch(new AddMessage(message)) 
      
      f.resetForm();                   //Что бы сбросить class 'mat-form-field-invalid', простой form.reset() не работает
    }
   
  }

  
}
