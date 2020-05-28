import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any;
  product_id:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.product_id = params['id'];
      this.getProduct(this.product_id);
    });
  }

  getProduct(product_id){
    let observable = this._httpService.getProduct(product_id);
    observable.subscribe(data => {
      console.log('Got a product!', data);
      this.product = data;
    })
  }

  deleteProduct(){
    let observable = this._httpService.deleteProduct(this.product_id);
    observable.subscribe(data => {
      console.log('Deleted a product!', data);
      this._router.navigate(['/products']);
    })
  }
}
