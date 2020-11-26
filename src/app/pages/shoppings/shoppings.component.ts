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
  roomId:number =0;

  constructor(
    public productService: ProductService,
    public roomService: RoomService
    ) {
    this.products = productService.getProductsEmpty(this.roomId);
  }

  ngOnInit() {
    this.roomService.change.subscribe(id => {
      this.roomId = id;
      this.products = this.productService.getProductsEmpty(this.roomId);
    });
    /*
    this.productService.change.subscribe(update=> {
      this.products = this.productService.getProductsNotEmpty(this.roomId);
    });
    */
  }

  onAdd1(productId: number) {
    console.log("onAdd1:", productId);
    this.productService.setProductIncrease1(productId);
    this.products = this.productService.getProductsEmpty(this.roomId);
  }
}
