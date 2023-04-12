import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProduitComponent } from './components/produit/produit.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';

const routes: Routes = [
  {
    path:'',
    component:ConnexionComponent
  },
  {
    path:'stock',
    component:ProduitComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'fournisseur',
    component:FournisseurComponent
  }
  ,
  {
    path:'commande',
    component:CommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
