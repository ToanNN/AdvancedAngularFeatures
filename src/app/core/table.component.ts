import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedstate.model";

@Component({
  selector: "table-component",
  templateUrl: "table.component.html"
})
export class TableComponent {
  constructor(private model: Model, private state: SharedState) { }
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
    this.state.id = key ?? 0;
    this.state.mode = MODES.EDIT;
  }
  createProduct() {
    this.state.id = 0;
    this.state.mode = MODES.CREATE;
  }
}
