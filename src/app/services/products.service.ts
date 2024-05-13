import { Deal } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { DealsResponse, Product } from '../interfaces/product';
import { AmazonDataService } from './amazon-data.service';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  take,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private readonly productsList$: Observable<Product[]> =
    this.productsSubject.asObservable();

  constructor(private readonly amazonDataService: AmazonDataService) {
    // this.amazonDataService.getDeals().pipe(take(1)).subscribe({
    //   next: (resp: DealsResponse) => {
    //     if (resp.status === 'OK' && resp?.data?.deals?.length > 0) {
    //       this.productsSubject.next(resp.data.deals);
    //     }
    //   },
    //   error: (error) => console.error(error),
    // });
  }

  getProducts() {
    return this.productsList$;
  }

  getProductDetails(product_asin: string): Observable<Product | null> {
    return this.productsList$.pipe(
      map((products: any[]) =>
        products.find(
          (product: Product) => product.product_asin === product_asin
        )
      ),
      catchError((error: any) => {
        console.error('Error fetching product details:', error);
        return of(null); // Return null if an error occurs
      })
    );
  }

  createProduct(product: Product): Product {
    this.productsSubject.next([product, ...this.productsSubject.getValue()]);
    return product;
  }

  deleteProduct() {}
}
