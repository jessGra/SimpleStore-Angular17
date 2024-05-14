import { Deal } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { DealsResponse, Product } from '../interfaces/product';
import { AmazonDataService } from './amazon-data.service';
import { BehaviorSubject, Observable, catchError, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private readonly productsList$: Observable<Product[]> =
    this.productsSubject.asObservable();

  constructor(private readonly amazonDataService: AmazonDataService) {
    this.amazonDataService
      .getDeals()
      .pipe(take(1))
      .subscribe({
        next: (resp: DealsResponse) => {
          if (resp.status === 'OK' && resp?.data?.deals?.length > 0) {
            this.productsSubject.next(resp.data.deals);
          }
        },
        error: (error) => console.error(error),
      });
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

  editProduct(product: Product): Product | null {
    let productsList = this.productsSubject.getValue();
    const productIndex = productsList.findIndex(
      (currentProduct: Product) =>
        currentProduct.product_asin === product.product_asin
    );

    if (productIndex !== -1) {
      productsList[productIndex] = product;
      this.productsSubject.next(productsList);
      return product;
    } else {
      console.error('Product not found for editing:', product.product_asin);
      return null;
    }
  }

  deleteProduct(product_asin: string) {
    this.productsSubject.next(
      this.productsSubject
        .getValue()
        .filter((product) => product.product_asin !== product_asin)
    );
  }
}
