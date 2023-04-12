import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/data/fournisseur.model';


@Injectable({
    providedIn:'root'
})

export class FournisseurService {

    constructor(private http: HttpClient){}
    public fournisseurEndPoint = "https://localhost:7141/api/Fournisseur"
    public fournisseurUpdateEndPoint = "https://localhost:7141/api/Fournisseur/" 
    public fournisseurAddEndPoint = "https://localhost:7141/api/Fournisseur"
    public fournisseurRemoveEndPoint = "https://localhost:7141/api/Fournisseur/"
  
    getFournisseur():Observable<Fournisseur[]> {
        return this.http.get<Fournisseur[]>(this.fournisseurEndPoint);
    }

    updateFournisseur(id:number, fournisseur:Fournisseur){
        return this.http.put(this.fournisseurUpdateEndPoint+id, fournisseur);
    }

    addFournisseur(fournisseur: Fournisseur){
        return this.http.post<Fournisseur>(this.fournisseurAddEndPoint, fournisseur);
    }

    removeFournisseur(id:number){
        return this.http.delete(this.fournisseurUpdateEndPoint+id);
    }
}