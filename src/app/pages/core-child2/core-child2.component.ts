import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-core-child2',
  templateUrl: './core-child2.component.html',
  styleUrl: './core-child2.component.css' ,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CoreChild2Component implements DoCheck , OnChanges  {

  message = 'Initial Message';

  constructor(private cdr: ChangeDetectorRef) {}

  updateMessage() {
    this.message = 'Updated!';
    this.cdr.detectChanges(); // Forces change detection
  }
  

  ngDoCheck(): void {
    console.log("##########  Signal1Component  something is changed")
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      console.log(`#########  Property ${prop} changed from`, changes[prop].previousValue, 'to', changes[prop].currentValue);
    }
  }

}
