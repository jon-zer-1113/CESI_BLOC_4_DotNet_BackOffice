import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/data/client.model';


@Injectable({
    providedIn:'root'
})

export class ClientService {

    constructor(private http: HttpClient){}
    public clientEndPoint = "https://localhost:7141/api/Client"
    public clientUpdateEndPoint = "https://localhost:7141/api/Client/" 
    public clientAddEndPoint = "https://localhost:7141/api/Client"
    public clientRemoveEndPoint = "https://localhost:7141/api/Client/"
  
    getClient():Observable<Client[]> {
        return this.http.get<Client[]>(this.clientEndPoint);
    }

    updateClient(id:number, client:Client){
        return this.http.put(this.clientUpdateEndPoint+id, client);
    }

    addClient(client: Client){
        return this.http.post<Client>(this.clientAddEndPoint, client);
    }

    removeClient(id:number){
        return this.http.delete(this.clientUpdateEndPoint+id);
    }
}
