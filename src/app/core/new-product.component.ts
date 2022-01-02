import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedstate.model";

@Component({
  selector: "new-product",
  templateUrl: "new-product.component.html",
  styleUrls: ["new-product.component.css"]
})
export class NewProductComponent {
  product: Product;
  constructor(private model: Model, private state: SharedState) {
    this.product = new Product();
  }

  get editing(): boolean {
    return this.state.mode === MODES.EDIT;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }
  resetForm() {
    this.product = new Product();
    this.state.mode = MODES.CREATE;
  }
}
