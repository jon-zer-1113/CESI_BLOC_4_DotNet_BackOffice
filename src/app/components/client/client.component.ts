import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/data/client.model';
import notify from 'devextreme/ui/notify';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[]=[]
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private clientService: ClientService) {
    
  }
  updateClient(event){
    console.log("mon event",event);
    var client =  this.clients.find(x => x.id == event.key);
    console.log("mon produit",client)
  
    client.nom = event.newData.nom == undefined ? client.nom : event.newData.nom
    client.prenom = event.newData.prenom == undefined ? client.prenom : event.newData.prenom
    client.tel = event.newData.tel == undefined ? client.tel : event.newData.tel
    client.email = event.newData.email == undefined ? client.email : event.newData.email
    client.adresse = event.newData.adresse == undefined ? client.adresse : event.newData.adresse
    
  
    this.clientService.updateClient(event.key, client).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);
    });
  }

  addClient(event){
    console.log("new product", event);
    this.clientService.addClient(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeClient(event){
    console.log("remove product", event);
    this.clientService.removeClient(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
    this.clientService.getClient().subscribe(resultat => {
      this.clients = resultat;
     })
  }
 
}
