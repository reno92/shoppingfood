import { MockData } from './../mock-data/mock-product-data';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Product } from '../service/product';
import {  Subject, Observable  } from 'rxjs';
// import { Component } from '@angular/core';
//import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root', //
})
export class ProductService {

  //static first:boolean = true;
  products: Product[] = [];
  //productsSubject = new Subject<Product[]>();

  private dbPath = '/products';
  //private productsRef: AngularFirestoreCollection<Product> = null;
  //products: Observable<Product[]>;

  //emitProducts() {
  //  this.productsSubject.next(this.products);
  //}

  //saveProducts() {
    //firebase.database().ref('/products').set(this.products);
    //this.db.collection('products');
  //}

  //static products: Product[] = MockData.products;
  //@Output() change: EventEmitter<boolean> = new EventEmitter();

  //constructor(private db: AngularFirestore) {
  constructor() {
    //if (ProductService.first){
    if (true){
      console.log('ProductService.constructor')
      this.products = MockData.products;
      //ProductService.first = false;
      /*
      this.productsRef = db.collection(this.dbPath);
      var products = MockData.products;
      for (const product of products) {
        this.productsRef.add({...product});
      }
      */
    }
  }

  //updateProduct(key: string, value: any): Promise<void> {
    //return this.productsRef.doc(key).update(value);
  //}

  getProducts(roomId: number = 0, empty: boolean =true, not_empty: boolean =true): Product[] {
    console.log('getProducts:', roomId, empty, not_empty);
    let res: Product[] = [];
    for (const product of this.products) {
    //for (const product of ProductService.products) {
      if (roomId == 0 || product.roomId == roomId){
        if ((empty  && product.quantity == 0) || (not_empty && product.quantity != 0)) {
          res.push(product);
          //console.log(product.name);
        }
      }
    }
    return res.slice();
  }

  getProductsEmpty(roomId: number = 0): Product[] {
    console.log('getProductsEmpty:', roomId);
    return this.getProducts(roomId, true, false);
  }

  getProductsNotEmpty(roomId: number = 0): Product[] {
    console.log('getProductsEmpty:', roomId);
    return this.getProducts(roomId, false, true);
  }


  setProductQuantity(product:Product, q:number){
    product.quantity = q;

  }

  setProductDecrease1(productId:number){

    const product = this.getProductById(productId);
    //product.quantity = product.quantity - 1;
    product.quantity -= 1;
    //this.change.emit(true);
  }

  setProductIncrease1(productId:number){

    const product = this.getProductById(productId);
    //product.quantity = product.quantity - 1;
    product.quantity += 1;
    //this.change.emit(true);

  }

  getProductById(id : number): Product {
    return this.products.find(p => p.id === id);
    //return ProductService.products.find(p => p.id === id);
  }

  removeProduct(product: Product) {
    let index = this.products.indexOf(product);
    //let index = ProductService.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      //ProductService.products.splice(index, 1);
    }
  }
}
