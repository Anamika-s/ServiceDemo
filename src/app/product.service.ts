import { Injectable } from '@angular/core';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products : Product[];
LoadProducts()
{
  this.products = [
    {productID: 10 ,name : "Mouse" , price : 1000},
    {productID: 11 ,name : "Plotter" , price : 1000},
    
    {productID: 12 ,name : "Scanner" , price : 1000},
    
    {productID: 13 ,name : "Printer" , price : 1000},
    
    {productID: 14 ,name : "Monitor" , price : 1000}
    
        ];
    
}
GetProducts() : Product[]

{
  console.log("GetProducts called");
  this.LoadProducts(); 
  console.log(this.products.length);
  return this.products;
  
}
product : Product;
GetProductById(id : number) : Product

{
  console.log("GetProduct called");
  this.product = this.products.find(x=>x.productID == id);
   if(this.product !=null)
   
  return this.product;
  
}

AddProduct(product : Product)
{
  console.log(product);
  this.products.push(product);
  console.log("Added");
}
constructor() { }
}
