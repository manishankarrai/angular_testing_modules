import { Component } from '@angular/core';
import { ToSignalServiceService } from '../../services/to-signal-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-signal-component',
  templateUrl: './to-signal-component.component.html',
  styleUrl: './to-signal-component.component.css'
})
export class ToSignalComponentComponent {

  value: number = 0;
  newEventerEmitter = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
     // resolve(11);
     // resolve(12);
    }, 10000);
  });
  newEventerObserable  =  new Observable((subs)=> {
    setTimeout(() => {
      subs.next(10);
      subs.next(11);
      subs.next(12);
      subs.complete();
    }, 6000);
  })
  constructor(private dataService: ToSignalServiceService) { }

  ngOnInit(): void {
    // Subscribe to the observable
    this.dataService.value$.subscribe(val => this.value = val);
  }

  increase(): void {
    this.dataService.update(5);  // Increase by 5
     
  }

  decrease(): void {
    this.dataService.reduce(3);  // Decrease by 3
  }
  resolvePromiseBtn(): void {
    this.newEventerEmitter
    .then((data)=>  console.log("resolve " ,data))
    .catch((err)=> console.log("reject " , err))
    .finally(()=> console.log("promise fullfilled"));

    this.newEventerObserable.subscribe((data)=> {
        console.log("subs data" , data);
    });
    // execute immediately and not emit multiple value 
    // execute when subscribe and emit multiple val and cancel
    // normal obserables don't have next method  (from outside) so we update values value overtime 
    // above reason is good for use subject  ,not  obserables
  }
}