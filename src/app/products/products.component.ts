import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {
  data: Array<{id: number, name: string, price: number}> = [
    { id: 1, name: 'Quần', price: 1000 },
    { id: 2, name: 'Áo', price: 1000 },
    { id: 3, name: 'Quần Áo', price: 1000 }
  ];

  addToCart(value:any){
    console.log(value)
  }
}
