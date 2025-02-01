import { Component, OnInit , Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrl: './input2.component.css'
})
export class Input2Component  implements OnInit , DoCheck , OnChanges {
    @Input() data : string   = '';
    @Input() firstName : string  =  '' ;
    @Input() lastName : string  =  '' ;
    @Input() department : string  =  '' ;
    @Input() branch : string  =  '' ;
    @Input() about : string  =  '' ;

    constructor(){
    }
    ngOnInit(): void {
       
    }
    ngDoCheck(): void {
      console.log("ng do check ")
    }
    ngOnChanges(changes: SimpleChanges) : void {
       console.log("ng on change")
    }
}
