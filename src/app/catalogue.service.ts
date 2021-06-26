import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string="http://localhost:8080";


  constructor(private http: HttpClient) { }

  //une methode pour chercher produit, ou catalogue, ou qlq entities
  public getResource(url: string){
    return this.http.get(this.host+url);
  }
}
