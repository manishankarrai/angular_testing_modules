import { Component, DoCheck, ElementRef, OnChanges, computed , OnDestroy, OnInit, Signal, SimpleChanges, ViewChild, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal1',
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.css'
})
export class Signal1Component implements OnInit, OnDestroy, DoCheck, OnChanges {

  checkNum1: WritableSignal<number> = signal(0);
  checkNum1Readable : Signal<number>  =  computed(() => this.checkNum1() + 1)
  @ViewChild('numInput') numInputRef !: ElementRef;
  constructor() {

  }
  ngDoCheck(): void {
    console.log("Signal1Component  something is changed")
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      console.log(`Property ${prop} changed from`, changes[prop].previousValue, 'to', changes[prop].currentValue);
    }
  }
  ngOnInit(): void {

  }
  replaceSignal(num: string) {
    if (num) {
      this.checkNum1.set(+num);
      this.numInputRef.nativeElement.value = '';
    }else { console.log(num)}
  }
  addSignal(num: string) {
    if (num) {
      this.checkNum1.set(+num + this.checkNum1());
      this.numInputRef.nativeElement.value = '';
    }else { console.log(num)}

  }
  removeSignal(num: string) {
    if (num) {
      this.checkNum1.set(this.checkNum1() - (+num));
      this.numInputRef.nativeElement.value = '';
    }else { console.log(num)}

  }
  ngOnDestroy(): void {

  }
}
