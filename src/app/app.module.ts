import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular';
import { ProduitComponent } from './components/produit/produit.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ClientComponent } from './components/client/client.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProduitService } from './services/produit.service';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ConnexionComponent,
    CommandeComponent,
    ClientComponent,
    NavbarComponent,
    FournisseurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule

  ],
  providers: [ClientService, ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
