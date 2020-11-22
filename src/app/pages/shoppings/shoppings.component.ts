import { Component, OnInit } from '@angular/core';
import { Product } from './../../service/product';
import { ProductService } from '../../service/product.service';
import { Room} from '../../service/room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.scss']
})

export class ShoppingsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public productService: ProductService,
    public roomService: RoomService
    ) {
    this.products = productService.getProductsEmpty();
  }

  ngOnInit() {
  }

  onAdd1(productId: number) {
    console.log("onAdd1:", productId);
    this.productService.setProductIncrease1(productId);
  }
}
