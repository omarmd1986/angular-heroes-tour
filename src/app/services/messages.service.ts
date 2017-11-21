import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable()
export class MessagesService {
    messages: Message[] = [];
    
    add(message: Message): void{
        this.messages.push(message);
    }
    
    clear(): void{
        this.messages = [];
    }
    
    length(): number{
        return this.messages.length;
    }

  constructor() { }

}
