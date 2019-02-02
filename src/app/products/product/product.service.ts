import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IProduct from './product.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    constructor(private _http: HttpClient){
    }

    getProducts() {
        return this._http.get('https://www.json-generator.com/api/json/get/cfdZMBKtKa?indent=2')
        .pipe(map(data => data));
    }

    /* getProducts = () : IProduct[] => {
        return [
            {
                id: 1,
                serialNo: 'P001',
                productName: 'Samsung Galaxy S9',
                category: 'Mobile',
                status: false
            },
            {
                id: 2,
                serialNo: 'P002',
                productName: 'Samsung Galaxy J8',
                category: 'Tablet',
                status: true
            },
            {
                id: 3,
                serialNo: 'P003',
                productName: 'Apple iPhone 7',
                category: 'Mobile',
                status: false
            }
        ];           
    } */
}