import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
  originalProduct = new Product();
  constructor(public model: Model, activatedRoute: ActivatedRoute, private router: Router) {

    activatedRoute.params.subscribe(params => {
      this.editing = params["mode"] == "edit";
      let id = params["id"];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product())
        Object.assign(this.originalProduct, this.product);
      }
    })
  }

  editing: boolean = false;

  get productChanged(): boolean {
    let currentProductJson = JSON.stringify(this.product);
    let originalProductJson = JSON.stringify(this.originalProduct);

    return currentProductJson !== originalProductJson;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.originalProduct = this.product;
      this.router.navigateByUrl("/");
    }
  }

}
