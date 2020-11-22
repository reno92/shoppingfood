import { Component, OnInit } from '@angular/core';
import { Product} from '../../service/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  product : Product;

  constructor (public productService: ProductService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id'); 
    this.product = productService.getProductById(+id);
  }

  ngOnInit(): void {
  }

  onBack(): void {

    this.router.navigate(['/products']);
    
    }

}
