import { Pipe , PipeTransform } from  '@angular/core' ;
@Pipe({
    name : 'reverse'  ,
    pure :  false 
})

export class ReversePipe  implements PipeTransform {
     transform(value : number[] | string ) : string {
         console.log("called");
         if(typeof value == 'string'){
                  return  value.toUpperCase() ;
         }else {
                  return value.reverse().join(',');
         }
     }
}