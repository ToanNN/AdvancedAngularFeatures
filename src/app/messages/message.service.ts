import { Observable, Subject } from "rxjs";
import { Message } from "./message.model";

export class MessageService {
  private subject = new Subject<Message>();
  constructor() {

  }

  reportMessage(m: Message) {
    this.subject.next(m);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }
}
