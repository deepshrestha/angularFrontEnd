import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/Operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _page: string;
  _section: string;
  _allowEdit: string;
  _fragment: string;

  constructor(private route: ActivatedRoute){
  }

  ngOnInit() {

    /* this._page = this.route.snapshot.params.page;
    this._section = this.route.snapshot.params.section;
    this._allowEdit = this.route.snapshot.queryParams.allowEdit;
    this._fragment = this.route.snapshot.fragment; */

    //console.log(this.route.snapshot.queryParams);

    this._page = this.route.snapshot.queryParams.page;
    this._section = this.route.snapshot.queryParams.section;
    this._allowEdit = this.route.snapshot.queryParams.allowEdit;
    this._fragment = this.route.snapshot.fragment;
  }

}
