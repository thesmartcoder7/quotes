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

  ngOnInit(): void {}
}
