import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent
  ],
  imports: [
    BrowserModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
