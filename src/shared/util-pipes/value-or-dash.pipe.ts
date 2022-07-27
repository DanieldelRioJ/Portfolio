import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'valueOrDash',
})
export class ValueOrDashPipe implements PipeTransform {
    transform(value: unknown, replacement = '-'): unknown {
        if (value instanceof Array) {
            return value.length > 0 ? value : replacement;
        }
        return value ?? replacement;
    }
}
