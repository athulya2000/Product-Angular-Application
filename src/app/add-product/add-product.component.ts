import { Component } from '@angular/core';

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

  readValues=()=>{
    let product:any={"productcode":this.productcode,"productname":this.productname,"manufacturingDate":this.manufacturingDate,"expirydate":this.expirydate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributorname":this.distributorname}
    console.log(product)
  }
}
