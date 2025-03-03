import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  template: `<h3>Hello, {{ name }}!</h3>`,
  styles: [`h3 { color: blue; }`]
})
export class CustomElementComponent {
  @Input() name = 'Angular';
}
