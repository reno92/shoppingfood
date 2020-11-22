import { Component, OnInit } from '@angular/core';
import { Product } from './../../service/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.scss']
})

export class ShoppingsComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductService) {
    this.products = productService.getProductsEmpty();
  }

  ngOnInit() {
  }

  onAdd1(productId:number) {
    console.log("onAdd1:", productId);
    this.productService.setProductIncrease1(productId);
  }
}