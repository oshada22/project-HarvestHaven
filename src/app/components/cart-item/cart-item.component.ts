import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() id!: number; 
  @Input() no!: number;
  product!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() { 
    this.product = this.productService.get_product(this.id)
  }


}