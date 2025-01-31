import { Directive  , HostBinding  , HostListener } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor() { }

  @HostBinding('class.clicked') isClicked = false; 
  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked; 
  }


}
