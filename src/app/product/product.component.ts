import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers :[ProductService]
})
export class ProductComponent implements OnInit {
  products : Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.GetProducts();
  }
  id: number;
  product : Product;
  GetProductById()
  {
   this.product = this._productService.GetProductById(this.id);
  console.log(this.product);
  }
   AddProduct()
   {
     this.product = new   Product(100,"Scanner", 9000);
     
     this._productService.AddProduct(this.product);
     
   }
  

}
