import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Order } from "../interfaces/order/order.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OrderApiService {
  private apiUrl = 'https://localhost:7126/api/Orders';
  
  constructor(private http: HttpClient) {}

  public CreateOrder(order:Order){
    return this.http.post(this.apiUrl,order);
  }

  public GetAll(){
    return this.http.get<Order[]>(this.apiUrl)
  } 

}