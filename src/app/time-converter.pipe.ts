import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter',
})
export class TimeConverterPipe implements PipeTransform {
  transform(ms: number): number {
    let seconds = (ms / 1000).toFixed(0);
    let minutes = (ms / (1000 * 60)).toFixed(0);
    let hours = (ms / (1000 * 60 * 60)).toFixed(0);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
    if (Number(seconds) < 60) return Number(seconds);
    else if (Number(minutes) < 60) return Number(minutes);
    else if (Number(hours) < 24) return Number(hours);
    else return Number(days);
  }
}
