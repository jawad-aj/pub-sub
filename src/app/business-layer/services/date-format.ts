import {NativeDateAdapter} from '@angular/material/core';

export class DateFormat extends NativeDateAdapter {

  parse(value: any): Date | null {
    const s = /^(?:\d{1,2}\/\d{1,2}\/\d{4})?$/;
    const str = value.split('/');
    if (s.test(value)) {
      if (str.length == 3 && Number(str[0]) <= 31 && Number(str[0]) > 0 && Number(str[1]) <= 12 && Number(str[1]) > 0 && Number(str[2]) > 1900) {
        const year = Number(str[2]);
        const month = Number(str[1]) - 1;
        const date = Number(str[0]);
        const hour = Number(new Date().getHours());
        const min = Number(new Date().getMinutes());
        const second = Number(new Date().getSeconds());
        return new Date(year, month, date, hour, min, second);
      } else {
        return null
      }
    }

  }

  format(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
