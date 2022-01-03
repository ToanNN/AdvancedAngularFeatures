import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCountComponent } from './core/categoryCount.component';
import { NewProductComponent } from "./core/new-product.component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from './core/productCount.component';
import { TableComponent } from "./core/table.component";
import { ProductResolver } from './model/product.resolver';

const childRoutes: Routes = [
  { path: "products", component: ProductCountComponent },
  { path: "categories", component: CategoryCountComponent },
  { path: "", component: ProductCountComponent, resolve: { model: ProductResolver } }
];

const routes: Routes = [
  { path: "product/:mode/:id", component: NewProductComponent, resolve: { model: ProductResolver } },
  { path: "product/:mode", component: NewProductComponent, resolve: { model: ProductResolver } },
  { path: "table/:category", component: TableComponent },
  {
    path: "table", component: TableComponent,
    children: childRoutes
  },
  {
    path: "table/:category", component: TableComponent, children: childRoutes
  },
  { path: "", redirectTo: "/table", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }];

export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
