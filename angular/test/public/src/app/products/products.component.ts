import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log('Got all the products!', data);
      this.products = data;
    })
  }

}
