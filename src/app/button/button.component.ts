import { Component, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    inputs: ['status'],
    outputs: ['onToggle']
})
export class ButtonComponent{

    active : { text: string, class: string } = {
        text: 'Active',
        class: 'btn btn-success btn-sm'
    };

    inactive: { text: string, class: string} = {
        text: 'In-Active',
        class: 'btn btn-danger btn-sm'
    };

    status: boolean;
    onToggle = new EventEmitter<string>();

   //@Input('status') status: boolean;
   //@Output('onToggle') onToggle: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _ele: ElementRef){
    }     

    onButtonComponent(element){
        this.onToggle.emit(element);
    }
}
