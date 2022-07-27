import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstCase',
})
export class FirstCasePipe implements PipeTransform {
    transform(word: string | null | undefined, lower = false): string {
        if (!word) {
            return '-';
        }
        const restWord = lower ? word.substr(1).toLowerCase() : word.substr(1);
        return word.charAt(0).toUpperCase() + restWord;
    }
}
