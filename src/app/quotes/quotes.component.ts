import { Component, OnInit } from '@angular/core';
import { globalAgent } from 'http';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Nelson Mandela',
      'Samuel Martins',
      'The greatest glory in living lies not in never falling, but in rising every time we fall'
    ),
    new Quote(
      'Steve Jobs',
      'Samuel Martins',
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"
    ),
    new Quote(
      'Oprah Winfrey',
      'Samuel Martins',
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
