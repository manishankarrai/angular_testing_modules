import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToSignalServiceService {


  private valueSubject = new BehaviorSubject<number>(0);

  // Observable for components to subscribe
  value$: Observable<number> = this.valueSubject.asObservable();

  constructor() {}

  // Method to update value (increment by provided amount)
  update(amount: number): void {
    this.valueSubject.next(this.valueSubject.value + amount);
  }

  // Method to reduce value (decrease by provided amount)
  reduce(amount: number): void {
    this.valueSubject.next(this.valueSubject.value - amount);
  }
}