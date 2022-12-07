import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productcode=""
  productname=""
  manufacturingDate=""
  expirydate=""
  brand=""
  price=""
  sellername=""
  distributorname=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let product:any={"productcode":this.productcode,"productname":this.productname,"manufacturingDate":this.manufacturingDate,"expirydate":this.expirydate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributorname":this.distributorname}
    console.log(product)
    this.api.addProduct(product).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("product added suceessfully")
          this.productcode=""
          this.productname=""
          this.manufacturingDate=""
          this.expirydate=""
          this.brand=""
          this.price=""
          this.sellername=""
          this.distributorname=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
