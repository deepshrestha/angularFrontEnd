import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  title: string = "Category";
  action: string;
  status: boolean;
  categories: any[];
  filterCategory: string = '';

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
              private _categoryService: CategoryService, 
              private _router: Router) { 
    this.categories = this._categoryService.getCategory();
  }

  ngOnInit() {
    //this.action = this._route.snapshot.params['action'];

    this._route.queryParams.subscribe(
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

  onButtonComponent(ele) {
    
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
    
      item.id = this.categories.length + 1;
      this.categories.push(item);
      this.onCancel();
  }
  
  onCancel(){
    this._router.navigate([ './'], { queryParams: {'action': 'list'}, relativeTo: this._route});
  }
}
