import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';


@Pipe({
  name: 'CoplDatetime'
})
export class CoplDatetime implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  /*  transform(value: string): string {
      const format = 'yyyy-MM-dd';
      const myDate = value;
      const formattedDate = formatDate(myDate, format, locale);
      console.log(formattedDate);
      return formattedDate;
    }
  }*/

  transform(value: string): string {
    value = this.datePipe.transform(value, 'yyyy-MM-dd h:mm:ss');
    return value;
  }

}
