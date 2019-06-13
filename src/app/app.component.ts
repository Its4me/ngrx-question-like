import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from './ngrx/app.state';
import { Message } from './Clasess/Clasess';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  messages: Message[] = [];
 

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.store.select('messagePage').subscribe( ({messages}) => {
      this.messages = messages;
      setTimeout(()=>{
        this.sortByLikes();
      }, 500)
      
    })
    

  }

  private sortByLikes(){
    this.messages.sort((a,b)=>{
      return b.likesCount - a.likesCount;
    })
  }

}
