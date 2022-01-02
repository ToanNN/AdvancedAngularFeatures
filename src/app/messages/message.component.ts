import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  selector: "message-component",
  templateUrl: "message.component.html"
})
export class MessageComponent {
  lastMessage: Message | undefined;
  constructor(messageService: MessageService) {
    this.lastMessage = undefined;
    messageService.messages.subscribe(m => this.lastMessage = m);
  }

}
