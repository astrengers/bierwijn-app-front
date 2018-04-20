import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BierAppComponent } from './bier-app/bier-app.component';
import { BierServiceService } from "./bier-service/bier-service.service";
import { BierLijstComponent } from './bier-lijst/bier-lijst.component';


@NgModule({
  declarations: [
    AppComponent,
    BierAppComponent,
    BierLijstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BierServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
