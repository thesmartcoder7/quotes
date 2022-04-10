import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() singleQuote!: Quote;
  @Output() quoteDelete = new EventEmitter<boolean>();

  constructor() {}

  deleteCurrentQuote(value: boolean) {
    this.quoteDelete.emit(value);
  }

  getTimeEapsed(value: any) {
    let currentTime: any = new Date();
    let elapsedTime: any = currentTime - value;
    if (elapsedTime > 59000 && elapsedTime < 120000) {
      this.singleQuote.timeSuffix = 'minute';
    } else if (elapsedTime > 120000 && elapsedTime < 3600000) {
      this.singleQuote.timeSuffix = 'minutes';
    } else if (elapsedTime > 3600000 && elapsedTime < 7200000) {
      this.singleQuote.timeSuffix = 'hour';
    } else if (elapsedTime > 7200000 && elapsedTime < 86400000) {
      this.singleQuote.timeSuffix = 'hours';
    } else if (elapsedTime > 86400000 && elapsedTime < 172800000) {
      this.singleQuote.timeSuffix = 'day';
    } else if (elapsedTime > 172800000) {
      this.singleQuote.timeSuffix = 'days';
    } else {
      this.singleQuote.timeSuffix = 'seconds';
    }
    return elapsedTime;
  }

  getType(input: any) {
    return typeof input;
  }

  ngOnInit(): void {}
}
