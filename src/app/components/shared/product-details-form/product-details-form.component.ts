import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-details-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './product-details-form.component.html',
  styleUrl: './product-details-form.component.scss',
})
export class ProductDetailsFormComponent {
  private readonly random_img_seed =
    Math.floor(Math.random() * (1 - 100 + 1)) + 100;
  readonly randomImgUrl = `https://picsum.photos/seed/${this.random_img_seed}/350/300`;
  private readonly formBuilder = inject(FormBuilder);
  private readonly dialogRef: MatDialogRef<ProductDetailsFormComponent> =
    inject(MatDialogRef);
  private readonly productsService: ProductsService = inject(ProductsService);

  private product: Product = {
    deal_title: '',
    deal_photo: '',
    deal_price: {
      amount: '',
      currency: '',
    },
    savings_percentage: 0,
    product_asin: '',
  };

  productFormGroup = this.formBuilder.nonNullable.group({
    name: [
      this.product.deal_title,
      [Validators.required, Validators.pattern(/^.{3,}$/)],
    ],
    price: [
      Number(this.product.deal_price.amount),
      [Validators.required, Validators.min(0)],
    ],
    discount: [
      Number(this.product.savings_percentage),
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
  });

  createProduct(): void {
    if (this.productFormGroup.valid) {
      this.product = {
        deal_photo: this.randomImgUrl,
        deal_price: {
          amount: String(this.productFormGroup.value.price),
          currency: 'USD',
        },
        deal_title: this.productFormGroup.value.name || '',
        product_asin: String(this.random_img_seed),
        savings_percentage: this.productFormGroup.value.discount || 0,
      };
      const productCreated = this.productsService.createProduct(this.product);
      console.log('product created', productCreated);

      this.dialogRef.close();
    }
  }
}
