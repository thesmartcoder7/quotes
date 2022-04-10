export class Quote {
  upvotes: number;
  downvotes: number;
  timeElapsed: number;
  showDetails: boolean;
  buttonText: string;
  constructor(
    public author: string,
    public username: string,
    public quote: string
  ) {
    this.showDetails = false;
    this.buttonText = 'show details';
    this.upvotes = 0;
    this.downvotes = 0;
    this.timeElapsed = 0;
  }
}
