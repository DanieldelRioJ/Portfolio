import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wrap',
})
export class WrapPipe implements PipeTransform {
    transform(value: string, start = '(', end = ')'): string {
        return value ? `${start}${value}${end}` : '';
    }
}
