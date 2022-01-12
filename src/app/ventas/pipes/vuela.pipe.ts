import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'vuela'
})

export class VuelaPipe implements PipeTransform{

    transform(value:boolean=true): string {
        return (value) ? 'SI' : 'NO'
    }

}