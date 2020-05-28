import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:any;
  productToUpdate:any;
  product_id:any;
  errors: {};
  disabled: boolean;
  fieldsChanged: {};
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
    this.errors = {};
    this.disabled = true;
    this.fieldsChanged = {name: "name", quantity: "quantity", price: "price"};
  }

  getProduct(product_id){
    let observable = this._httpService.getProduct(product_id);
    observable.subscribe(data => {
      console.log('Got a product!', data);
      this.product = data;
      this.productToUpdate = {
        name: this.product.name, 
        quantity: this.product.quantity, 
        price: this.product.price
      };
    })
  }

  updateProduct(){
    let observable = this._httpService.updateProduct(this.product_id, this.productToUpdate);
    observable.subscribe(data => {
      console.log('Updated a product!', data);
      this._router.navigate(['/products']);
    })
  }

  reset(){
    this.productToUpdate = {
      name: this.product.name, 
      quantity: this.product.quantity, 
      price: this.product.price
    };
  }

  validate(event){
    if(event.path[0].name == "name"){
      this.fieldsChanged["name"] = "name";
      if(this.productToUpdate.name.length < 3){
        this.errors['name'] = "Name field must be at least 3 characters";
        this.disabled=true;
        delete this.fieldsChanged["name"];
      } else{
        if(this.errors['name']){
          delete this.errors['name'];
        }
      }
    } else if(event.path[0].name == "quantity"){
      this.fieldsChanged["quantity"] = "quantity";
      if(this.productToUpdate.quantity < 0 || this.productToUpdate.quantity == "" || isNaN(this.productToUpdate.quantity)){
        this.errors['quantity'] = "Quantity must be a number more than 0";
        this.disabled=true;
        delete this.fieldsChanged["quantity"];
      } else{
        if(this.errors['quantity']){
          delete this.errors['quantity'];
        }
      }
    } else if(event.path[0].name == "price"){
      this.fieldsChanged["price"] = "price";
      if(this.productToUpdate.price < 0 || this.productToUpdate.price == "" || isNaN(this.productToUpdate.price)){
        this.errors['price'] = "Price must be a number more than 0";
        this.disabled=true;
        delete this.fieldsChanged["price"];
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
