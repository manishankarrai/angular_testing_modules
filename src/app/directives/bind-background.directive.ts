import { Directive  , HostListener  , HostBinding } from '@angular/core';

@Directive({
  selector: '[appBindBackground]'
})
export class BindBackgroundDirective {
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter')
    this.backgroundColor = 'lightblue'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave')
    this.backgroundColor = 'pink'; 
  }
}
