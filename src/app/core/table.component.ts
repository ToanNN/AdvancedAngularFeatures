import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observer } from "rxjs";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedstate.model";

@Component({
  selector: "table-component",
  templateUrl: "table.component.html"
})
export class TableComponent {
  category: string = "";
  constructor(private model: Model, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params["category"] || null;
    })
  }
  getProducts(): Product[] {
    return this.model.getProducts().filter(p => !this.category || this.category === p.category);
  }

  get categories(): (string | undefined)[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  deleteProduct(key: number | undefined) {
    if (!key) {
      return;
    }
    this.model.deleteProduct(key);
  }

}
