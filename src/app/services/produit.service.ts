import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Sort } from 'src/app/data/product.model';



@Injectable({
    providedIn:'root'
})
export class ProduitService {

    constructor(private http: HttpClient){}
    public productEndPoint = "https://localhost:7141/api/Produit"
    public productUpdateEndPoint = "https://localhost:7141/api/Produit/" 
    public productAddEndPoint = "https://localhost:7141/api/Produit"
    public productRemoveEndPoint = "https://localhost:7141/api/Produit/"

    public typeEndPoint = "https://localhost:7141/api/Sort"
  
    getProduct():Observable<Product[]> {
        return this.http.get<Product[]>(this.productEndPoint);
    }

    getType():Observable<Sort[]> {
        return this.http.get<Sort[]>(this.typeEndPoint);
    }

    updateProduct(id:number, product:Product){
        return this.http.put(this.productUpdateEndPoint+id, product);
    }

    addProduct(product: Product){
        return this.http.post<Product>(this.productAddEndPoint, product);
    }

    removeProduct(id:number){
        return this.http.delete(this.productUpdateEndPoint+id);
    }
}