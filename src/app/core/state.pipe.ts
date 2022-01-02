import { Pipe } from "@angular/core";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedstate.model";

@Pipe({
  name: "formatState",
  pure: true
})
export class FormatStatePipe {
  constructor(private model: Model) { }
  transform(value: any): string {
    if (value instanceof SharedState) {
      let state = value as SharedState;
      let productName: string | undefined = "";
      if (state.id != undefined) {
        let product = this.model.getProduct(state.id);
        productName = product?.name;
      }
      return MODES[state.mode] + productName;
    }
    return "<No Data>";
  }
}
