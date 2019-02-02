import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
 selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('highlightColor') color: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight("yellow");
        this.el.nativeElement.style.backgroundColor = this.color;
    }

    @HostListener('mouseleave') onMouseLeave() {
        //this.highlight(null);
        this.el.nativeElement.style.backgroundColor = null;
    }

    /* private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    } */
}