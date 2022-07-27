import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abbr',
})
export class AbbrPipe implements PipeTransform {
    transform(value: string, length = 5): string {
        return value.length > length ? value.slice(0, length) + '.' : value;
    }
}
