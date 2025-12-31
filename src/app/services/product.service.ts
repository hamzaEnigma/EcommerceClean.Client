import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product/product.model';
import { Category } from '../interfaces/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='https://localhost:7126/api/products';
  private apiUrlCategories ='https://localhost:7126/api/categories';
  constructor(private http:HttpClient) { }

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  public CreateProduct(product:Product) {
    return this.http.post(this.apiUrl,product)
  }

  public getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrlCategories);
  }
}
