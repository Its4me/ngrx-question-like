import { MessageEffect } from './ngrx/message.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuestionComponent } from './question/question.component';
import { messageReducer } from './ngrx/message.reducer';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    StoreModule.forRoot({messagePage: messageReducer}),
    EffectsModule.forRoot([MessageEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
