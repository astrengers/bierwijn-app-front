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
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {BierThumbnail} from "./bier-lijst/bier-thumbnail";
import {BierPaginaComponent} from './bier-pagina/bier-pagina.component';
import {AngularFileUploaderModule} from "angular-file-uploader";
import {AddWijnComponent} from './add-wijn/add-wijn.component';
import {WijnThumbnail} from "./wijn-lijst/wijn-thumbnail";
import {LoginComponent} from './login/login.component';
import {AppService} from "./app.service";

const appRoutes: Routes = [
  { path: '', component: DrankenAppComponent},
  { path: 'bier-lijst', component: BierLijstComponent },
  { path: 'bier-lijst/:id', component: BierPaginaComponent},
  { path: 'wijn-center', component: WijnLijstComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DrankenAppComponent,
    BierLijstComponent,
    WijnLijstComponent,
    addBierComponent,
    MenuComponent,
    BierThumbnail,
    WijnThumbnail,
    BierPaginaComponent,
    AddWijnComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes),
    AngularFileUploaderModule
  ],
  exports:[
    BierLijstComponent,
    RouterModule
  ],
  providers: [BierService, WijnService, HttpClientModule, NgbActiveModal, AppService],
  bootstrap: [AppComponent],
  entryComponents: [addBierComponent, AddWijnComponent]
})
export class AppModule { }
