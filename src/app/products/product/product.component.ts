import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IProduct from './product.interface';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  action: string;
  status: boolean;
  products: any;
  subscription: Subscription;

  statuses: any[] = [
    {id: false, value: 'In-Active'},
    {id: true, value: 'Active'}
  ];

  active : { text: string, class: string } = {
    text: 'Active',
    class: 'btn btn-success btn-sm'
  };

  inactive: { text: string, class: string} = {
    text: 'In-Active',
    class: 'btn btn-danger btn-sm'
  };

  constructor(private _route: ActivatedRoute, 
              private _productService: ProductService, 
              private _router: Router) { 

    this.subscription = this._productService.getProducts()
    .subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }

  ngOnInit() {
    //this.action = this._route.snapshot.params['action'];

    this._route.params.subscribe(
      (param: Params) => {
        this.action = param['action'];
    });
  }

  onButtonStatus(ele) {

    let element = ele.target;

    if(element.innerText == 'Active'){
      element.className = this.inactive.class;
      element.innerText = this.inactive.text;
    }
    else {
      element.className = this.active.class;
      element.innerText = this.active.text;
    }
  }

  onSaveData(item){    
    
      item.id = this.products.length + 1;
      this.products.push(item);
      this.onCancel();
  }
  
  onCancel(){
    this._router.navigate([ '../', 'list'], {relativeTo: this._route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
