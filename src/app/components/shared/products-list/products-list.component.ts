import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  productsList: Product[] = [];

  constructor(
    // private productsService: ProductsService,
    private productModalDialog: MatDialog
  ) {
    // this.productsService
    //   .getProducts()
    //   .subscribe((products) => (this.productsList = products));
  }

  openProductModal(product_asin?: string) {
    // this.productModalDialog.open(ProductDetailsComponent, {
    //   minWidth: '600px',
    //   data: product_asin,
    // });
  }
}
