import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Subject } from "rxjs";
import { ModelModule } from "../model/model.module";
import { CategoryCountComponent } from "./categoryCount.component";
import { NewProductComponent } from "./new-product.component";
import { NotFoundComponent } from "./notFound.component";
import { ProductCountComponent } from "./productCount.component";
import { SharedState, SHARED_STATE } from "./sharedstate.model";
import { FormatStatePipe } from "./state.pipe";
import { TableComponent } from "./table.component";
import { UnsavedGuard } from "./unsaved.guard";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  declarations: [TableComponent, NewProductComponent, FormatStatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [TableComponent, NewProductComponent],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }, UnsavedGuard]
})
export class CoreModule { }
