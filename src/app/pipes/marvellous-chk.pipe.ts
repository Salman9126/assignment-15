import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(num: any, args?: any): any {
    if(args == 'Even'){
      if(num % 2 ==0 ){
        return "It is Even number";
      }else{
        return "It is Not Even number";
      }
    }

    if(args == 'Odd'){
      if(num % 2 != 0 ){
        return "It is Odd number";
      }else{
        return "It is Not Odd number";
      }
    }

    if(args == 'Prime'){
      for(var i = 2; i < num; i++){
        if(num % i === 0) return "It is Not Prime number.";
      }
      if(num !== 1 && num !== 0){
        return "It is Prime number.";
      }else{
        return "It is Not Prime number.";
      }
    }
    
    if(args == 'Perfect'){
      var temp = 0;
      for(var i=1;i<=num/2;i++)
      {
          if(num%i === 0)
          {
            temp += i;
          }
      }
      if(temp === num && temp !== 0)
      {
        return "It is a Perfect number.";
      } 
      else
      {
        return "It is Not a Perfect number.";
      }
    }
  }

}
