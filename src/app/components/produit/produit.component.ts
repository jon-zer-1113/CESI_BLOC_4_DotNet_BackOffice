import { Component, OnInit} from '@angular/core';
import { Product, Sort} from 'src/app/data/product.model';
import notify from 'devextreme/ui/notify';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  products: Product[]=[]
  sorts: Sort[]
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private produitService: ProduitService) {
    
  }
  updateProduct(event){
    console.log("mon event",event);
    var product =  this.products.find(x => x.id == event.key);
    console.log("mon produit",product)
  
    product.millesime = event.newData.millesime == undefined ? product.millesime : event.newData.millesime
    product.nomDomaine = event.newData.nomDomaine == undefined ? product.nomDomaine : event.newData.nomDomaine
    product.prix = event.newData.prix == undefined ? product.prix : event.newData.prix
    product.quantite = event.newData.quantite == undefined ? product.quantite : event.newData.quantite
    product.reference = event.newData.reference == undefined ? product.reference : event.newData.reference
    product.volume = event.newData.volume == undefined ? product.volume : event.newData.volume
    product.image = event.newData.image == undefined ? product.image : event.newData.image

    product.sortId = event.newData.sortId == undefined ? product.sortId : event.newData.sortId
  
    this.produitService.updateProduct(event.key, product).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);
    
    });
  }

  addProduct(event){
    console.log("new product", event);
    this.produitService.addProduct(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeProduct(event){
    console.log("remove product", event);
    this.produitService.removeProduct(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
   this.produitService.getProduct().subscribe(resultat => {
    this.products = resultat;
  });
   this.produitService.getType().subscribe(resultat => {
    this.sorts = resultat;
  });
  }
}
