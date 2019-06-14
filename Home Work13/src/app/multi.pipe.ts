import { Pipe, PipeTransform } from '@angular/core';
import { Timeouts } from 'selenium-webdriver';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: string, multi: any): string {
    let param = "";
    for (let i = 0; i < multi; i++) {
      param = param + " " + value;
    } return param;
  }
  //   transform(value: any, times: number) {  
  //     returnrepeat(times);  
  //  }
}
