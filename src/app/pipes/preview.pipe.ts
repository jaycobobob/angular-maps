import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'preview',
})
export class PreviewPipe implements PipeTransform {
    transform(value: string, previewLength?: number) {
        if (!value) {
            return null;
        }

        // removing all citation numbers from wikipedia entries
        let out = '';
        let pass = false;
        for (let c of value) {
            if (c === '[') pass = true;
            if (!pass) out += c;
            if (c === ']') pass = false;
        }
        return out.substring(0, previewLength) + '...';
    }
}
