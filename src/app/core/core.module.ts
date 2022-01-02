import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { ModelModule } from "../model/model.module";
import { NewProductComponent } from "./new-product.component";
import { SharedState, SHARED_STATE } from "./sharedstate.model";
import { FormatStatePipe } from "./state.pipe";
import { TableComponent } from "./table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, NewProductComponent, FormatStatePipe],
  exports: [TableComponent, NewProductComponent],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]
})
export class CoreModule { }
