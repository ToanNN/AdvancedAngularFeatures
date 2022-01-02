import { Component } from "@angular/core";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  selector: "message-component",
  templateUrl: "message.component.html"
})
export class MessageComponent {
  lastMessage: Message | undefined;
  constructor(messageService: MessageService, router: Router) {
    this.lastMessage = undefined;
    messageService.messages.subscribe(m => this.lastMessage = m);
    router.events.pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
      .subscribe(e => this.lastMessage = undefined);

  }

}
