import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

    constructor(){
    }

    getCategory() {
        return [
            {
                id: 1,
                categoryName: 'Mobile',
                status: false
            },
            {
                id: 2,
                categoryName: 'Tablet',
                status: true
            },
            {
                id: 3,
                categoryName: 'Hardware and Accessories',
                status: true
            },
            {
                id: 4,
                categoryName: 'Games and Sports',
                status: true
            }
        ];           
    }
}