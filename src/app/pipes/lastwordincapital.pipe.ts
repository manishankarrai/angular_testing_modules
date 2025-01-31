import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastwordincapital' 
})
export class LastwordincapitalPipe implements PipeTransform {

  transform(value: string , arg: string = '' , change: string = '' ): string  {
    let strArray  =   value.trim().split('');
    if(arg && arg == 'reverse'){
       strArray.reverse();
    }else {
      strArray[value.length - 1] =  strArray[value.length - 1].toUpperCase();
    }
    let newString  = strArray.join('') ;
    change && change  == 'ok' ? (newString +=  'ok') : '';
    return    newString ;
  }

}
