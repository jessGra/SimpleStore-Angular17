import { Deal } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { DealsResponse, Product } from '../interfaces/product';
import { AmazonDataService } from './amazon-data.service';
import { BehaviorSubject, Observable, catchError, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<Product[]>([
    {
      deal_id: '4ecd032a',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Amazon Kindle Paperwhite (16 GB) – Now with a larger display, adjustable warm light, increased battery life, and faster page turns – Black',
      deal_photo: 'https://m.media-amazon.com/images/I/61gIwK6CyPL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/Kindle-Paperwhite-16-GB-adjustable/dp/B09TMN58KL',
      canonical_deal_url: 'https://www.amazon.com/deal/4ecd032a',
      deal_starts_at: '2024-05-05T07:00:00.000Z',
      deal_ends_at: '2024-05-13T07:00:00.000Z',
      deal_price: {
        amount: '114.99',
        currency: 'USD',
      },
      list_price: {
        amount: '149.99',
        currency: 'USD',
      },
      savings_percentage: 23,
      savings_amount: {
        amount: '35.0',
        currency: 'USD',
      },
      deal_badge: '23% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B09TMN58KL',
    },
    {
      deal_id: '7ff715e1',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Space Gray',
      deal_photo: 'https://m.media-amazon.com/images/I/81jqUPkIVRL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/New-Apple-AirPods-Max-Space/dp/B08PZHYWJS',
      canonical_deal_url: 'https://www.amazon.com/deal/7ff715e1',
      deal_starts_at: '2024-05-09T07:00:00.000Z',
      deal_ends_at: '2024-05-24T06:59:59.000Z',
      deal_price: {
        amount: '449.99',
        currency: 'USD',
      },
      list_price: {
        amount: '549.0',
        currency: 'USD',
      },
      savings_percentage: 18,
      savings_amount: {
        amount: '99.01',
        currency: 'USD',
      },
      deal_badge: '18% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B08PZHYWJS',
    },
    {
      deal_id: '35f80eae',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Beats Studio Buds - True Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black',
      deal_photo: 'https://m.media-amazon.com/images/I/51bRSWrEc7S.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/Beats-Studio-Cancelling-Earbuds-Built-Bluetooth-Headphones/dp/B096SV8SJG',
      canonical_deal_url: 'https://www.amazon.com/deal/35f80eae',
      deal_starts_at: '2024-05-05T07:00:00.000Z',
      deal_ends_at: '2024-05-19T06:59:59.000Z',
      deal_price: {
        amount: '79.95',
        currency: 'USD',
      },
      list_price: {
        amount: '149.95',
        currency: 'USD',
      },
      savings_percentage: 47,
      savings_amount: {
        amount: '70.0',
        currency: 'USD',
      },
      deal_badge: '47% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B096SV8SJG',
    },
    {
      deal_id: 'a99633ae',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal',
      deal_photo: 'https://m.media-amazon.com/images/I/518cRYanpbL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/All-New-release-Smart-speaker-Charcoal/dp/B09B8V1LZ3',
      canonical_deal_url: 'https://www.amazon.com/deal/a99633ae',
      deal_starts_at: '2024-04-28T04:00:00.000Z',
      deal_ends_at: '2024-05-13T03:55:00.000Z',
      deal_price: {
        amount: '27.99',
        currency: 'USD',
      },
      list_price: {
        amount: '49.99',
        currency: 'USD',
      },
      savings_percentage: 44,
      savings_amount: {
        amount: '22.0',
        currency: 'USD',
      },
      deal_badge: '44% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B09B8V1LZ3',
    },
    {
      deal_id: '35f80eae',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black',
      deal_photo: 'https://m.media-amazon.com/images/I/61u-OaDSfQL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PR4W22',
      canonical_deal_url: 'https://www.amazon.com/deal/35f80eae',
      deal_starts_at: '2024-05-05T07:00:00.000Z',
      deal_ends_at: '2024-05-19T06:59:59.000Z',
      deal_price: {
        amount: '179.95',
        currency: 'USD',
      },
      list_price: {
        amount: '349.99',
        currency: 'USD',
      },
      savings_percentage: 49,
      savings_amount: {
        amount: '170.04',
        currency: 'USD',
      },
      deal_badge: '49% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B0C8PR4W22',
    },
    {
      deal_id: '29b8c69f',
      deal_type: 'BEST_DEAL',
      deal_title:
        'All-new Amazon Fire TV Stick 4K streaming device, more than 1.5 million movies and TV episodes, supports Wi-Fi 6, watch free & live TV',
      deal_photo: 'https://m.media-amazon.com/images/I/41vhe0X8wbL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/all-new-amazon-fire-tv-stick-4k/dp/B0BP9MDCQZ',
      canonical_deal_url: 'https://www.amazon.com/deal/29b8c69f',
      deal_starts_at: '2024-05-01T15:00:00.000Z',
      deal_ends_at: '2024-05-13T06:59:59.000Z',
      deal_price: {
        amount: '29.99',
        currency: 'USD',
      },
      list_price: {
        amount: '49.99',
        currency: 'USD',
      },
      savings_percentage: 40,
      savings_amount: {
        amount: '20.0',
        currency: 'USD',
      },
      deal_badge: '40% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B0BP9MDCQZ',
    },
    {
      deal_id: '9ee887b3',
      deal_type: 'BEST_DEAL',
      deal_title:
        'AIPER Seagull Pro Cordless Robotic Pool Vacuum Cleaner, Wall Climbing Pool Vacuum Lasts up to 150 Mins, Quad-Motor System, Smart Navigation, Ideal for In-Ground Pools up to 1,600 Sq.ft',
      deal_photo: 'https://m.media-amazon.com/images/I/71avyX9pZUL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/AIPER-Seagull-Cordless-Quad-Motor-Navigation/dp/B0CD1D9QTY',
      canonical_deal_url: 'https://www.amazon.com/deal/9ee887b3',
      deal_starts_at: '2024-05-06T07:00:00.000Z',
      deal_ends_at: '2024-05-13T06:45:00.000Z',
      deal_price: {
        amount: '599.0',
        currency: 'USD',
      },
      list_price: {
        amount: '899.99',
        currency: 'USD',
      },
      savings_percentage: 33,
      savings_amount: {
        amount: '300.99',
        currency: 'USD',
      },
      deal_badge: '33% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B0CD1D9QTY',
    },
    {
      deal_id: '40fabffe',
      deal_type: 'BEST_DEAL',
      deal_title:
        'Skylight Calendar: 15 inch Digital Calendar & Chore Chart, Smart Touchscreen Interactive Display for Family Schedules - Wall Mount Included',
      deal_photo: 'https://m.media-amazon.com/images/I/61kdlvrgoUL.jpg',
      deal_state: 'AVAILABLE',
      deal_url:
        'https://www.amazon.com/Skylight-Calendar-Touchscreen-Interactive-Schedules/dp/B0C9V811L6',
      canonical_deal_url: 'https://www.amazon.com/deal/40fabffe',
      deal_starts_at: '2024-05-06T07:00:00.000Z',
      deal_ends_at: '2024-05-13T06:45:00.000Z',
      deal_price: {
        amount: '249.99',
        currency: 'USD',
      },
      list_price: {
        amount: '319.99',
        currency: 'USD',
      },
      savings_percentage: 22,
      savings_amount: {
        amount: '70.0',
        currency: 'USD',
      },
      deal_badge: '22% off',
      type: 'SINGLE_ITEM',
      product_asin: 'B0C9V811L6',
    },
  ]);
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

  deleteProduct(product_asin: string) {
    this.productsSubject.next(
      this.productsSubject
        .getValue()
        .filter((product) => product.product_asin !== product_asin)
    );
  }
}
