import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
        <h1>Page Not Found!</h1>
    `,
    styles: [`
        h1 {
            color: red;
            padding: 200px 0px 0px 600px;
        }
    `]
})

export class NotFoundComponent {

}
