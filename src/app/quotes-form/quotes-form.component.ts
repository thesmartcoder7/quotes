import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  newQuote!: Quote;
  author!: string;
  username!: string;
  quote!: string;

  @Output() addThisQuote = new EventEmitter<Quote>();
  shareQuote() {
    this.newQuote = new Quote(this.author, this.username, this.quote);
    this.addThisQuote.emit(this.newQuote);
  }

  constructor() {}

  ngOnInit(): void {}
}
