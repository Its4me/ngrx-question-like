import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MESSAGE_ACTION } from './message.action';
import { switchMap, mergeMap, catchError, tap  } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class MessageEffect {

    constructor(private actions$: Actions){}
 
    @Effect({dispatch: false}) addMessage = this.actions$.pipe(
        ofType(MESSAGE_ACTION.ADD_MESSAGE),
        tap(() => console.log('Sending request to add question')))
        
    
        
        

    @Effect({dispatch: false}) like = this.actions$.pipe(
        ofType(MESSAGE_ACTION.ADD_LIKE),
        tap(() => console.log('Sending request to add/remove like')))
}