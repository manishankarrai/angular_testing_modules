import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-hostlistneruser',
  templateUrl: './hostlistneruser.component.html',
  styleUrl: './hostlistneruser.component.css'
})
export class HostlistneruserComponent implements OnInit {
    arrList :number[]   =  []; 
   constructor() {
      
   }

   ngOnInit(): void {
     let arr = [];
      for(let  i=0; i < 300 ; i++ ){
        arr.push(i);  
      }
      this.arrList =  arr ;
   }
}
