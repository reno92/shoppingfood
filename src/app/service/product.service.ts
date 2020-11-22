import { MockData } from './../mock-data/mock-product-data';
import { Injectable } from '@angular/core';
import { Product } from '../service/product';
import { empty } from 'rxjs';

@Injectable()
export class ProductService {

  products: Product[] = [];
  empty: Product[] = [];
  notEmpty: Product[] = [];

  constructor() {
    this.products = MockData.products;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsEmpty(): Product[] {
    for (let product of this.products) {
      if (product.quantity == 0) {
        this.empty.push(product);
      }
    }
     return this.empty;
  }

  getProductsNotEmpty(): Product[] {
    for (let product of this.products) {
      if (product.quantity  !=0) {
        this.notEmpty.push(product);
      }
    }
     return this.notEmpty;
  }

  setProductQuantity(product:Product, q:number){
    product.quantity = q;
  }

  setProductDecrease1(productId:number){

    const product = this.getProductById(productId);
    //product.quantity = product.quantity - 1;
    product.quantity -= 1;

  }

  setProductIncrease1(productId:number){

    const product = this.getProductById(productId);
    //product.quantity = product.quantity - 1;
    product.quantity += 1;

  }

  getProductById(id : number): Product {
    return this.products.find(p => p.id === id);
  }

  removeProduct(product: Product) {
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
