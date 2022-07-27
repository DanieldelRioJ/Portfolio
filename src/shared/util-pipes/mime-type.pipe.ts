import { Pipe, PipeTransform } from '@angular/core';
import { mimeTypes } from "mime-wrapper";

@Pipe({
  name: 'mimeType'
})
export class MimeTypePipe implements PipeTransform {

  transform(extension: string): string {
    return mimeTypes.getType(extension);
  }

}
