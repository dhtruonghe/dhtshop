import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customers } from '../common/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseUrl = 'http://localhost:8080/customers';
  
  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customers[]>{
    return this.httpClient.get<Customers[]>(this.baseUrl);
  }

  addCustomer(customer: Customers): Observable<Customers> {
    return this.httpClient.post<Customers>(this.baseUrl, customer);
  }


//   getCustomersList(): Observable<Customers[]>{
//     return this.httpClient.get<Customers[]>(this.baseUrl);
//   }
//   // getCustomersList(): Observable<Customers[]>{ 
//   //   return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
//   //     map(response => response._embedded.customers),
//   //   );
//   // }
//   // getCustomersList(): Observable<Customers[]> {
//   //   const username = 'user';
//   //   const password = '60408c2f-f8c9-4d7d-acb8-1925715f165a';
//   //   const headers = new HttpHeaders()
//   //     .set('Authorization', 'Basic ' + btoa(username + ':' + password));

//   //   return this.httpClient.get<GetResponse>(this.baseUrl, { headers }).pipe(
//   //     map(response => response._embedded.customers),
//   //   );
//   // }
// }

// interface GetResponse{
//   _embedded: {customers: Customers[]};
}
