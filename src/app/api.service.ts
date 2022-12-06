import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchProduct=()=>{
    return this.http.get("http://localhost:8080/productviewall")
  }
  addProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addproduct",dataToSend)
  }
}
