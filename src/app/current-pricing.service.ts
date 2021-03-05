import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentPricingService {

  baseURL: string = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current";
  accountKey: string = "21d7975f-0cee-489b-a5ec-d08fded2a4c7";

  constructor(private http: HttpClient) { }

  postCurrentPrice() {
    const headers = {
      // 'content-type': 'application/json',
      'x-api-key': 'PDprxfeN6h773d3G9RvBN2zp6H79R0tjp17Fhd0d'
    }
    const body = "21d7975f-0cee-489b-a5ec-d08fded2a4c7";
    return this.http.post(this.baseURL, { 'accountKey': body }, { 'headers': headers })
  }
}
