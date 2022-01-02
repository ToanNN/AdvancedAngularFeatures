import { Message } from "./message.model";

export class MessageService {
  private handlers: ((m: Message) => void)[];
  constructor() {
    this.handlers = [];
  }

  reportMessage(m: Message) {
    if (this.handlers != null) {
      for (const h of this.handlers) {
        h(m);
      }
    }
  }

  registerMessageHandler(handler: (m: Message) => void) {
    if (!this.handlers) {
      this.handlers = [];
    }
    if (!this.handlers.find(x => x == handler)) {
      this.handlers.push(handler);
    }
  }
}
