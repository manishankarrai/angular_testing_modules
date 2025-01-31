import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-goodcard',
  templateUrl: './goodcard.component.html',
  styleUrl: './goodcard.component.css'
})
export class GoodcardComponent implements OnInit {
        // filename : string  =  'checkImage.jpg' ;
        // filePath : string  = '1.jpg' ;
          constructor(){
              console.log("load card ")
          }
          ngOnInit(): void {
            
          }
}
