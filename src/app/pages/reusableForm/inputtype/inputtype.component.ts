import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputtype',
  templateUrl: './inputtype.component.html',
  styleUrl: './inputtype.component.css'
})
export class InputtypeComponent implements OnInit , DoCheck , OnChanges , OnDestroy {

   @Input() type : string  = 'text';
   @Input() label : string  = '';
   @Input() required : boolean  = false;
   @Input() formControls !:   FormControl; 
  // @Output() textInsert   =  new EventEmitter<string>() ;

      constructor(){}
      // inputInserted(event : Event ) : void {
      //   let inputValue  = (event.target as HTMLInputElement ).value  ;
      //   this.textInsert.emit(inputValue);
      //    console.log(inputValue);
      // }
   
        ngOnInit(): void {
          
        }
        ngDoCheck(): void {
          
        }
        ngOnChanges(changes: SimpleChanges): void {
          
        }
        ngOnDestroy(): void {
          
        }
  

}
