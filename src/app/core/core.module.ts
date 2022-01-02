import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { NewProductComponent } from "./new-product.component";
import { SharedState } from "./sharedstate.model";
import { TableComponent } from "./table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, NewProductComponent],
  exports: [TableComponent, NewProductComponent],
  providers: [SharedState]
})
export class CoreModule { }
