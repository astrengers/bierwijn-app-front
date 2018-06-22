import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DrankenAppComponent} from './dranken-app/dranken-app.component';
import {BierLijstComponent} from './bier-lijst/bier-lijst.component';
import {BierService} from "./bierservice/bier.service";
import {HttpClientModule} from "@angular/common/http";
import {WijnLijstComponent} from './wijn-lijst/wijn-lijst.component';
import {WijnService} from "./wijnservice/wijn.service";
import {addBierComponent} from "./add-bier/add-bier.component";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: DrankenAppComponent},
  { path: 'bier-lijst', component: BierLijstComponent },
  { path: 'wijn-center', component: WijnLijstComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DrankenAppComponent,
    BierLijstComponent,
    WijnLijstComponent,
    addBierComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes)
  ],
  exports:[
    BierLijstComponent,
    RouterModule
  ],
  providers: [BierService, WijnService, HttpClientModule, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [addBierComponent]
})
export class AppModule { }
