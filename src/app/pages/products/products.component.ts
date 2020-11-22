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

  constructor(
    public productService: ProductService,
    public roomService: RoomService
    ) {
    this.products = productService.getProductsNotEmpty();
  }

  ngOnInit() {
  }

  onDelete1(productId:number) {
    console.log("onDelete1:", productId);
    this.productService.setProductDecrease1(productId);

  }
}
