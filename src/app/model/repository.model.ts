import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class Model {
  private products: Product[];
  private locator = (p: Product, id: number) => p.id == id;
  constructor(private dataSource: RestDataSource) {
    this.products = [];
    dataSource.getData().subscribe(products => this.products = products);
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product | undefined {
    return this.products.find(p => this.locator(p, id));
  }
  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(pro => {
          let index = this.products
            .findIndex(p => this.locator(p, pro.id ?? 0));
          this.products.splice(index, 1, pro);
        });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(pro => {
      let index = this.products.findIndex(p => this.locator(p, pro.id ?? 0));
      if (index > -1) {
        this.products.splice(index, 1);
      }
    })
  }
  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
