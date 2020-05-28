import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct:any;
  errors: {};
  disabled: boolean;
  fieldsChanged: {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newProduct = {name: "", quantity: "", price: ""};
    this.errors = {};
    this.disabled = true;
    this.fieldsChanged = {};
  }

  createProduct(){
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      console.log('Submitted a new product!', data);
      this._router.navigate(['/products']);
    })
  }

  validate(event){
    if(event.path[0].name == "name"){
      this.fieldsChanged["name"] = "name";
      if(this.newProduct.name.length < 3){
        this.errors['name'] = "Name field must be at least 3 characters";
        this.disabled=true;
      } else{
        if(this.errors['name']){
          delete this.errors['name'];
        }
      }
    } else if(event.path[0].name == "quantity"){
      this.fieldsChanged["quantity"] = "quantity";
      if(this.newProduct.quantity < 0 || this.newProduct.quantity == "" || isNaN(this.newProduct.quantity)){
        this.errors['quantity'] = "Quantity must be a number more than 0";
        this.disabled=true;
      } else{
        if(this.errors['quantity']){
          delete this.errors['quantity'];
        }
      }
    } else if(event.path[0].name == "price"){
      this.fieldsChanged["price"] = "price";
      if(this.newProduct.price < 0 || this.newProduct.price == "" || isNaN(this.newProduct.price)){
        this.errors['price'] = "Price must be a number more than 0";
        this.disabled=true;
      } else{
        if(this.errors['price']){
          delete this.errors['price'];
        }
      }
    }
    if(Object.keys(this.errors).length == 0 && Object.keys(this.fieldsChanged).length == 3){
      this.disabled=false;
    }
  }
}
