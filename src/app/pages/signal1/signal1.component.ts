import { Component, DoCheck, ElementRef, OnChanges, computed , OnDestroy,
   OnInit, Signal, SimpleChanges, ViewChild, WritableSignal, signal,
   effect
   } from '@angular/core';
import { CoreChild2Component } from '../core-child2/core-child2.component';

@Component({
  selector: 'app-signal1',
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.css' 
})
export class Signal1Component implements OnInit, OnDestroy, DoCheck, OnChanges {

  checkNum1: WritableSignal<number> = signal(0);
  checkNum1Readable : Signal<number>  =  computed(() => this.checkNum1() + 1)
  @ViewChild('numInput') numInputRef !: ElementRef;
  @ViewChild(CoreChild2Component) childComponent !: CoreChild2Component ;
  myObjSignal : WritableSignal<{ [key: string] : string | number }> = signal({name : 'james'  , age: 66 , gender : "male"});
  myArraySignal: WritableSignal<number[]> =  signal([]) ;
  constructor() {
      effect(()=>{
        console.log(`The current checkNum1 is: ${this.checkNum1()}`);
        console.log(`The current checkNum1Readable is: ${this.checkNum1Readable()}`);
        console.log(`The current myObjSignal is: ${this.myObjSignal()}`);
        console.log(`The current myArraySignal is: ${this.myArraySignal()}`);
      });
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
  updateObjectInSignal(): void {
    let   data = {
      name: 'John Doe',
      age: 30,
      country: 'USA'
    };
    
     this.myObjSignal.set(data);
     this.myArraySignal.set([11,22,33,44,55,66])
     this.childComponent.updateMessage()
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
  incrementCheckNum(): void {
      this.checkNum1.update(value => value  + 1);
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
