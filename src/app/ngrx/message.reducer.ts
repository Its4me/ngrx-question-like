import { Message } from './../Clasess/Clasess';
import { Action } from '@ngrx/store';
import { MESSAGE_ACTION, AddMessage, MessageAction } from './message.action';

const initialState = {
    messages: [
        new Message('Как зовут препода?'),
        new Message('Он на 3 закроет?')
    ]
}

export function messageReducer(state = initialState, action: MessageAction){
    switch(action.type){
        case MESSAGE_ACTION.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.data]
            }
        case MESSAGE_ACTION.ADD_LIKE:
            const idx = state.messages.findIndex(m => m.id === action.data.id);

            state.messages[idx].like = state.messages[idx].like? false : true;
            if(state.messages[idx].like){
                state.messages[idx].likesCount += 1;
            }else{
                state.messages[idx].likesCount -= 1;
            }
            return {
                ...state,
                messages: [...state.messages]
            }
        default: 
            return state
    }
}