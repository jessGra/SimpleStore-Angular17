import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getDealsParams, getProductDetailsParams } from '../types';

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

  getProducts(params?: getDealsParams): Observable<any> {
    return this.http.get(`${this.url}/deals`, {
      headers: this.headers,
      params,
    });
  }

  getProductDetails(params: getProductDetailsParams): Observable<any> {
    return this.http.get(`${this.url}/product-details`, {
      headers: this.headers,
      params,
    });
  }
}
