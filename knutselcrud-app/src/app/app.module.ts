import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BierAppComponent} from './bier-app/bier-app.component';
import {BierLijstComponent} from './bier-lijst/bier-lijst.component';
import {BierService} from "./bier.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BierAppComponent,
    BierLijstComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BierService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
