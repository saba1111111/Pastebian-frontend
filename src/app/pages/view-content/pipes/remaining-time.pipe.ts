import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingTimeDisplayed',
})
export class RemainingTimePipe implements PipeTransform {
  transform(value: number): string {
    if (value <= 0) {
      return 'Expired';
    }

    const seconds = Math.floor((value / 1000) % 60);
    const minutes = Math.floor((value / (1000 * 60)) % 60);
    const hours = Math.floor((value / (1000 * 60 * 60)) % 24);
    const days = Math.floor(value / (1000 * 60 * 60 * 24));

    let result = '';

    if (days > 0) {
      result += `${days} day${days > 1 ? 's' : ''} `;
    }
    if (hours > 0) {
      result += `${hours} hour${hours > 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
      result += `${minutes} minute${minutes > 1 ? 's' : ''} `;
    }
    if (seconds > 0) {
      result += `${seconds} second${seconds > 1 ? 's' : ''}`;
    }

    return result.trim();
  }
}
