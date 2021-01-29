import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noProductImage'
})
export class NoProductImagePipe implements PipeTransform {

  transform(image: any): string {

    if ( !image ) {
      return 'assets/images/noimage.png';
    } 

    if (image.length > 0) {
      return image;
    }
  }
}