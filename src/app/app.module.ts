import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewallComponent } from './product-viewall/product-viewall.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[{
  path:"",
  component:AddProductComponent
},
{
  path:"view",
  component:ProductViewallComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
