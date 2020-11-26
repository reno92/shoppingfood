import { Component, OnInit } from '@angular/core';
import { Product } from './../../service/product';
import { ProductService } from '../../service/product.service';
import { Room} from '../../service/room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];
  roomId:number=0;

  constructor(
    public productService: ProductService,
    public roomService: RoomService
    ) {
    this.products = productService.getProductsNotEmpty(this.roomId);
  }

  ngOnInit() {
    this.roomService.change.subscribe(id => {
      this.roomId = id;
      this.products = this.productService.getProductsNotEmpty(this.roomId);
    });
  }

  onDelete1(productId:number) {
    console.log("onDelete1:", productId);
    this.productService.setProductDecrease1(productId);
    this.products = this.productService.getProductsNotEmpty(this.roomId);
  }
}
