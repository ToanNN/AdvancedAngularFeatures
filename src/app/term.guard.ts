import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Message } from "./messages/message.model";
import { MessageService } from "./messages/message.service";

@Injectable()
export class TermsGuard {
  constructor(private messages: MessageService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.params["mode"] == "create") {
      return new Promise<boolean>(res => {
        let responses: [string, () => void][] = [["Yes", () => res(true)],
        ["No", () => res(false)]];
        this.messages.reportMessage(
          new Message("Do you accept the terms & conditions?",
            false, responses));

      })
    } else {
      return true;
    }
  }
}
