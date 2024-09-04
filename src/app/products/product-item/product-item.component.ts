import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.less',
})
export class ProductItemComponent {
  @Input() product!: { id: number; name: string; price: number };

  @Output() cartEvent = new EventEmitter();

  addToCart(){
    this.cartEvent.emit("Add item to card with Id = "+this.product.id)
  }
}
