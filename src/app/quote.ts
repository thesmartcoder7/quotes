export class Quote {
  upvotes: number;
  downvotes: number;
  timeElapsed: any;
  timeSuffix: string;
  showDetails: boolean;
  buttonText: string;
  constructor(
    public author: string,
    public username: string,
    public quote: string
  ) {
    this.showDetails = false;
    this.buttonText = 'show details';
    this.timeSuffix = 'seconds';
    this.upvotes = 0;
    this.downvotes = 0;
    this.timeElapsed = new Date();
  }
}
