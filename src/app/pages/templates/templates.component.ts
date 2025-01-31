import { Component ,ViewChild , ElementRef, Input, OnInit, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})
export class TemplatesComponent  implements OnInit{
  //@Input('showMYwelcome') showMYwelcome : TemplateRef ;
  @ViewChild('myInput') myInputField !: ElementRef ;
  showMessageBoolean : boolean =  false  ;
  matchStatus: string  = 'running' ;
  matchStatus2: string  = 'b' ;

  constructor(){}
  ngOnInit(): void { }
  focusInput() {
    this.myInputField.nativeElement.focus(); // Direct DOM access
  }
}
