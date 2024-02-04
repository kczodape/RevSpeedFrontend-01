import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTrailingZeros'
})
export class RemoveTrailingZerosPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(0).replace(/\.?0*$/, '');
  }

}
