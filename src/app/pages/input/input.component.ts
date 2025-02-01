import { Component , input, OnInit , Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
    firstName  =  input<string>();
    messageAbc : string = '' ;
    @ViewChild('val') valRef !: ElementRef<HTMLInputElement> ;
    personaInfo =  {
       firstName : 'james ' ,
       lastName : 'gun' , 
       department : 'sales' ,
       branch : 'sales department' ,
       about : 'hey sales person is now visible in the world of hero'
    }
    constructor(){}
    ngOnInit(): void {
      this.firstName.call('abc');
    }
    updateInput(val : string ): void {
        this.messageAbc =  val ;
        this.valRef.nativeElement.value = '' ;
    }
    

}
