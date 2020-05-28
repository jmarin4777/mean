import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products')
  }

  createProduct(newProduct){
    return this._http.post('/api/products', newProduct)
  }

  getProduct(product_id){
    return this._http.get('/api/products/' + product_id)
  }

  deleteProduct(product_id){
    return this._http.delete('/api/products/' + product_id)
  }

  updateProduct(product_id, productToUpdate){
    return this._http.patch('/api/products/' + product_id, productToUpdate)
  }
}
