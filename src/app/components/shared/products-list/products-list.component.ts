import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';
import { Subscription } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { SimpleDialogConfirmComponent } from '../simple-dialog-confirm/simple-dialog-confirm.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProductDetailsFormComponent } from '../product-details-form/product-details-form.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatCardModule, MatMiniFabButton, MatIcon, MatMenuModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  productsList: Product[] = [];
  private readonly getProductsSubscription: Subscription | undefined;

  constructor(
    private readonly productsService: ProductsService,
    private readonly modalDialog: MatDialog
  ) {
    this.getProductsSubscription = this.productsService
      .getProducts()
      .subscribe((products) => (this.productsList = products));
  }

  openProductModal(product_asin?: string) {
    this.modalDialog.open(ProductDetailsComponent, {
      minWidth: '320px',
      maxWidth: '700px',
      data: product_asin,
    });
  }

  deleteProduct(product_asin?: string) {
    if (!product_asin) return;

    const dialogRef = this.modalDialog.open(SimpleDialogConfirmComponent, {
      width: '250px',
      data: {
        message: 'Would you like to delete this product?',
        title: 'Delete Product',
      },
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) this.productsService.deleteProduct(product_asin);
    });
  }

  editProduct(product: Product) {
    this.modalDialog.open(ProductDetailsFormComponent, {
      minWidth: '320px',
      maxWidth: '700px',
      data: product,
      enterAnimationDuration: 300,
      exitAnimationDuration: 250,
    });
  }

  ngOnDestroy() {
    this.getProductsSubscription?.unsubscribe();
  }
}
