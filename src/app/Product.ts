import { normalizeGenFileSuffix } from "@angular/compiler/src/aot/util";

export class Product{
  productID: number;
  name : string ;
  price : number;
  constructor (productID : number, name : string ,
    price : number)
    {
      this.productID = productID;
      this.name = name;
      this.price = price;
    }
}