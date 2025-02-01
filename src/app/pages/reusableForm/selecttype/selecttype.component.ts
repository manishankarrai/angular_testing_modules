import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-selecttype',
  templateUrl: './selecttype.component.html',
  styleUrl: './selecttype.component.css'
})
export class SelecttypeComponent implements OnInit , DoCheck , OnChanges , OnDestroy {

   @Input() label : string  = '';
   @Input() required : boolean  = false;
   @Input() formControls !:   FormControl; 
   @Input() arrayList : { [key: string] : string }[] = [];
   @Input() selectLabel : string  = '';
   @Input() selectValue : string  = '';
//   arrayData  = [];


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
