import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-viewall',
  templateUrl: './product-viewall.component.html',
  styleUrls: ['./product-viewall.component.css']
})
export class ProductViewallComponent {
  
 constructor(private api:ApiService){
  api.fetchProduct().subscribe(
    (response)=>{
      this.products=response
    }
  )
 }

  products:any=[]
}
