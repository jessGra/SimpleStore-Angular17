import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';
import { take } from 'rxjs';
import { NgIf } from '@angular/common';
import { TimeDiffPipe } from '../../../pipes/time-diff.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgIf,
    TimeDiffPipe,
  ],
})
export class ProductDetailsComponent {
  product_asin: string = inject(MAT_DIALOG_DATA);
  product: Product | null | undefined;

  editing: boolean = false; //property to toggle between the form and details view

  constructor(private productsService: ProductsService) {
    if (this.product_asin) {
      this.productsService
        .getProductDetails(this.product_asin)
        .pipe(take(1))
        .subscribe((product) => (this.product = product));
    }
  }

  setEditingMode(state: boolean) {
    this.editing = state;
  }
}
