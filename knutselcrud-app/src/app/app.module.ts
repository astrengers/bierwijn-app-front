import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BierLijstComponent} from './bier/bier-lijst/bier-lijst.component';
import {BierService} from "./bier/bierservice/bier.service";
import {HttpClientModule} from "@angular/common/http";
import {WijnLijstComponent} from './wijn/wijn-lijst/wijn-lijst.component';
import {WijnService} from "./wijn/wijnservice/wijn.service";
import {addBierComponent} from "./bier/add-bier/add-bier.component";
import {wijzigBierComponent} from "./bier/wijzig-bier/wijzig-bier.component";
import {FormsModule} from "@angular/forms";
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './algemeen/menu/menu.component';
import {BierThumbnail} from "./bier/bier-lijst/bier-thumbnail";
import {BierPaginaComponent} from './bier/bier-pagina/bier-pagina.component';
import {AngularFileUploaderModule} from "angular-file-uploader";
import {AddWijnComponent} from './wijn/add-wijn/add-wijn.component';
import {WijnThumbnail} from "./wijn/wijn-lijst/wijn-thumbnail";
import {ColorPickerModule} from 'ngx-color-picker';
import {ReviewService} from "./algemeen/reviewservice/review.service";
import {LandenlijstService} from "./algemeen/landenlijst/landenlijst.service";
import {WijnPaginaComponent} from "./wijn/wijn-pagina/wijn-pagina.component";
import {DrankenAppComponent} from "./algemeen/dranken-app/dranken-app.component";
import {ZoekbalkComponent} from  "./bier/zoekbalk/zoekbalk.component";
import {FooterComponent} from "./algemeen/footer/footer.component";



const appRoutes: Routes = [
  { path: '', component: DrankenAppComponent},
  { path: 'bier-lijst', component: BierLijstComponent },
  { path: 'bier-lijst/:id', component: BierPaginaComponent},
  { path: 'wijn-lijst', component: WijnLijstComponent },
  { path: 'wijn-lijst/:id', component: WijnPaginaComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    DrankenAppComponent,
    BierLijstComponent,
    WijnLijstComponent,
    addBierComponent,
    wijzigBierComponent,
    MenuComponent,
    BierThumbnail,
    WijnThumbnail,
    BierPaginaComponent,
    AddWijnComponent,
    WijnPaginaComponent,
    ZoekbalkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes),
    AngularFileUploaderModule,
    ColorPickerModule,
  ],
  exports:[
    BierLijstComponent,
    RouterModule,
  ],
  providers: [BierService, WijnService, HttpClientModule, NgbActiveModal, ReviewService, LandenlijstService],
  bootstrap: [AppComponent],
  entryComponents: [addBierComponent, wijzigBierComponent, AddWijnComponent]
})
export class AppModule { }
