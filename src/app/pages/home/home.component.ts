import { Component , OnInit , DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , DoCheck  {
     studentName : string  =  'pinkman' ;
     age : number =  1 ;
     numArray: number[] =  [];
     myname : string  = 'checkabc' ;
     count : number  =   0 ;
     isLoggedIn : boolean =  true ;
     ngOnInit(): void {
         this.numArray =  [1,2,3,4,5];
     }
     updateNumArray() : void {
      debugger ;
          let num : number =  Math.floor(Math.random() * 100) ;
          this.numArray.push(num);
          console.log(this.numArray)
     }
     updateString() : void {
         this.myname +=   this.myname ;
     }
     ngDoCheck() : void {
         console.log("somthing changed")
     }
     increment(): void {
        this.age++ ;
     }
     ngPluralIncrease() : void {
        if(this.count < 4){
            this.count++ ;
        }else {
            this.count = 0 ;
        }
     }
}
