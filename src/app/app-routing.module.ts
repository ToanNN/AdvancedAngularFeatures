import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCountComponent } from './core/categoryCount.component';
import { NewProductComponent } from "./core/new-product.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from './core/productCount.component';
import { TableComponent } from "./core/table.component";

const routes: Routes = [
  { path: "product/:mode/:id", component: NewProductComponent },
  { path: "product/:mode", component: NewProductComponent },
  { path: "table/:category", component: TableComponent },
  {
    path: "table", component: TableComponent,
    children: [
      { path: "products", component: ProductCountComponent },
      { path: "categories", component: CategoryCountComponent }
    ]
  },
  { path: "", redirectTo: "/table", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }];

export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
