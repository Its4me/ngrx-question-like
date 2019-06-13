import { Action } from '@ngrx/store';

import { Message } from './../Clasess/Clasess';

export namespace MESSAGE_ACTION{
    export const ADD_MESSAGE = 'ADD_MESSAGE'
    export const ADD_LIKE = 'ADD_LIKE'
    
}

export class AddMessage implements Action{
    readonly type = MESSAGE_ACTION.ADD_MESSAGE
    constructor(public data: Message){}
}
export class AddLike implements Action{
    readonly type = MESSAGE_ACTION.ADD_LIKE
    constructor(public data: Message){}
}

export type MessageAction = AddMessage | AddLike