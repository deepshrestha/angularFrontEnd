import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorClass: string = 'error';
  errorClasses = {
    'error': true,
    'error-text': true
  }

  constructor(private _router: Router){
  }

  signin(obj){
    if(obj.email == "deepshrestha575@hotmail.com" && obj.password == "deep123"){
      
      this._router.navigate(['/home'], {queryParams: {page: 1, section: 2}, fragment: 'home'});
      console.log('logged in!');
    }
  }

}
