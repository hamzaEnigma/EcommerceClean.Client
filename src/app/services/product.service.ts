import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='https://localhost:7126/api/products';
  constructor(private http:HttpClient) { }

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
