import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColortag]'
})
export class ColortagDirective implements OnChanges {
  @Input() color: string = ''; // Color input property

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("Directive initialized!");
  }

  // ngOnChanges lifecycle hook to react to changes in the input properties
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] && changes['color'].currentValue) {
      // If the 'color' input has changed, apply the new background color
      this.appCustomBgColor(changes['color'].currentValue);
    }
  }

  // Method to apply background color
  private appCustomBgColor(color: string) {
    if (color) {
      console.log('Setting background color to:', color);
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }
}
