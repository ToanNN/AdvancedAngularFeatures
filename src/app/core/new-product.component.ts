import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { filter, Observable } from "rxjs";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedstate.model";

@Component({
  selector: "new-product",
  templateUrl: "new-product.component.html",
  styleUrls: ["new-product.component.css"]
})
export class NewProductComponent {
  product: Product = new Product();
  constructor(private model: Model, @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
    stateEvents.
      subscribe(update => {
        this.product = new Product();
        if (update.id != undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode == MODES.EDIT;
      })
  }

  editing: boolean = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }
  resetForm() {
    this.product = new Product();

  }
}
