import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { ModelModule } from './model/model.module';
import { TermsGuard } from './term.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule,
    MessageModule
  ],
  providers: [TermsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
