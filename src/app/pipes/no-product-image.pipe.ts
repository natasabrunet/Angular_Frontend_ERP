import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noProductImage'
})
export class NoProductImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
