import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milisecondsToYear'
})
export class MilisecondsToYearsPipe implements PipeTransform {

  transform(value: Date): string {
    const milesegYear = 31557600000;
    if(value){
      let now = new Date(Date.now());
      let time = (now.getTime() - value.getTime())/milesegYear;
      return `${Math.round(time)} years ago`;
    }
    return '';
  }

}
