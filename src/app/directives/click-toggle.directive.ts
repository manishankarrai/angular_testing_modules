import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickToggle]'
})
export class ClickToggleDirective {

  private isActive = false;

  @HostBinding('class.active') get activeClass() {
    return this.isActive;
  }

  @HostListener('click') onClick() {
    this.isActive = !this.isActive; // Toggle class on click
  }
}
