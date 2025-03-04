import { Component } from '@angular/core';

@Component({
  selector: 'app-call-child-element-view-element',
  templateUrl: './call-child-element-view-element.component.html',
  styleUrl: './call-child-element-view-element.component.css'
})
export class CallChildElementViewElementComponent {

    sayHello(): void {
        console.log("say hellow //////////")
        alert('say hellow');
    }
}
