import { Directive , HostBinding  , HostListener } from '@angular/core';

@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective {

  constructor() {
    console.log("directive is called ")
   }
 
  @HostListener('scroll', ['$event']) onScroll(event: Event) {
    const target = event.target as HTMLElement; // Cast the event target to HTMLElement
    const scrollTop = target.scrollTop; // Distance from the top of the element
    const scrollHeight = target.scrollHeight; // Total scrollable height
    const clientHeight = target.clientHeight; // Visible height of the element
    //console.log("target object " ,target);

    console.log(`Scroll Position: ${scrollTop}`);
    console.log(`Scrolled to bottom: ${scrollTop + clientHeight >= scrollHeight}`);
  }
}
