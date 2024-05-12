import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from '../../shared/products-list/products-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsFormComponent } from '../../shared/product-details-form/product-details-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private newProductModalDialog: MatDialog = inject(MatDialog);

  openNewProductModal() {
    this.newProductModalDialog.open(ProductDetailsFormComponent, {
      minWidth: '320px',
      enterAnimationDuration: 300,
      exitAnimationDuration: 250,
    });
  }
}
