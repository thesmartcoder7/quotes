import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  // @Input() quoteAuthor!: string;
  // @Input() quoteUpvotes!: number;
  // @Input() quoteDownvotes!: number;
  // @Input() quoteTimeElapsed!: number;
  // @Input() quoteTimeSuffix!: string;
  // @Input() quoteUserName!: string;

  @Input() singleQuote!: Quote;

  constructor() {}

  ngOnInit(): void {}
}
