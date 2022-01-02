import { Component, Inject } from "@angular/core";
import { Observer } from "rxjs";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedstate.model";

@Component({
  selector: "table-component",
  templateUrl: "table.component.html"
})
export class TableComponent {
  constructor(private model: Model, @Inject(SHARED_STATE) public observer: Observer<SharedState>) { }
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  deleteProduct(key: number | undefined) {
    if (!key) {
      return;
    }
    this.model.deleteProduct(key);
  }
  editProduct(key: number | undefined) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }
  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }
}
