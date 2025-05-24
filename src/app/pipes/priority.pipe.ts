import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
})
export class PriorityPipe implements PipeTransform {
  transform(value: number): unknown {
    switch (value) {
      case 1:
        return 'بالا';
      case 2:
        return 'متوسط';
      case 3:
        return 'پایین';
      default:
        return 'نامشخص';
    }
  }
}
