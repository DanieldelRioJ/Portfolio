import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(path: string): string {

    let reversedString = path.split("").reverse().join("");
    let extensionReversed = reversedString.substring(0, reversedString.indexOf('.'));
    let extension = extensionReversed.split("").reverse().join("");

    return extension;
  }

}
