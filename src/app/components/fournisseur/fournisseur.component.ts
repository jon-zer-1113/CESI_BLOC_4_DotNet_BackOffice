import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Fournisseur } from 'src/app/data/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit{

  fournisseurs: Fournisseur[]=[]
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private fournisseurService: FournisseurService) {
    
  }
  updateFournisseur(event){
    console.log("mon event",event);
    var fournisseur =  this.fournisseurs.find(x => x.id == event.key);
    console.log("mon produit",fournisseur)
  
    fournisseur.nom = event.newData.nom == undefined ? fournisseur.nom : event.newData.nom
    fournisseur.email = event.newData.email == undefined ? fournisseur.email : event.newData.email
    fournisseur.code_postal= event.newData.code_postal == undefined ? fournisseur.code_postal : event.newData.code_postal
    fournisseur.pays = event.newData.pays == undefined ? fournisseur.pays : event.newData.pays
    fournisseur.tel = event.newData.tel == undefined ? fournisseur.tel : event.newData.tel
    fournisseur.siret = event.newData.siret == undefined ? fournisseur.siret : event.newData.siret
    
  
    this.fournisseurService.updateFournisseur(event.key, fournisseur).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);
    
    });
  }

  addFournisseur(event){
    console.log("new product", event);
    this.fournisseurService.addFournisseur(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeFournisseur(event){
    console.log("remove product", event);
    this.fournisseurService.removeFournisseur(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
  }


  ngOnInit(): void {
    this.fournisseurService.getFournisseur().subscribe(resultat => {
      this.fournisseurs = resultat;
  })

}
}
