import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
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
  product: Product = {
    deal_title: '',
    deal_photo: '',
    deal_price: {
      amount: '',
      currency: 'USD',
    },
    savings_percentage: 0,
    product_asin: '',
  };

  isEditing: boolean = false;

  productFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: Product,
    private readonly dialogRef: MatDialogRef<ProductDetailsFormComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly productsService: ProductsService
  ) {
    if (!!this.dialogData) {
      this.product = this.dialogData;
      this.isEditing = true;
    } else {
      const random_img_seed = String(
        Math.floor(Math.random() * (1 - 100 + 1)) + 100
      );

      this.product.product_asin = random_img_seed;
      this.product.deal_photo = `https://picsum.photos/seed/${random_img_seed}/350/300`;
    }

    this.productFormGroup = this.formBuilder.nonNullable.group({
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
  }

  saveProduct(): void {
    if (this.productFormGroup.valid) {
      this.product = {
        ...this.product,
        deal_title: this.productFormGroup.get('name')?.value,
        deal_price: {
          amount: String(this.productFormGroup.get('price')?.value.toFixed(2)),
          currency: this.product.deal_price.currency,
        },
        savings_percentage: this.productFormGroup.get('discount')?.value,
        deal_badge: `${this.productFormGroup.get('discount')?.value}% off`,
      };

      const productSaved = this.isEditing
        ? this.productsService.editProduct(this.product)
        : this.productsService.createProduct(this.product);
      console.log('product saved', productSaved);

      this.dialogRef.close();
    }
  }
}
