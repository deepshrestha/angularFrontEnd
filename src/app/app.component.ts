import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo'; 

  _URL: string;

  constructor(private router: Router){
    this._URL = this.router.url;
    console.log(this._URL);
  }

}
