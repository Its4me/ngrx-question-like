import { AppState } from './../ngrx/app.state';
import { Message } from './../Clasess/Clasess';
import { Component,Input } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AddLike } from '../ngrx/message.action';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input('message') message: Message;


  constructor(private store: Store<AppState>) { }


  like(){
     this.store.dispatch(new AddLike(this.message))
  }

}
