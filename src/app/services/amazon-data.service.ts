import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  GetDealsParams,
  GetProductDetailsParams,
} from '../interfaces/amazon-api';
import { DealsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class AmazonDataService {
  private readonly url = environment.amazonDataApiUrl;
  private readonly headers = {
    'X-RapidAPI-Key': environment.rapidAmazonAPIKey,
    'X-RapidAPI-Host': environment.rapidAmazonAPIHost,
  };

  private http = inject(HttpClient);

  getDeals(params?: GetDealsParams): Observable<DealsResponse> {
    return this.http.get<DealsResponse>(`${this.url}/deals`, {
      headers: this.headers,
      params: params as HttpParams,
    });
  }

  getProductDetails(params: GetProductDetailsParams): Observable<any> {
    return this.http.get(`${this.url}/product-details`, {
      headers: this.headers,
      params: params as unknown as HttpParams,
    });
  }
}
