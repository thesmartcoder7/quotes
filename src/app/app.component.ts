import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quotes-app';

  getCurrentYear() {
    let timeline = new Date();
    return timeline.getFullYear();
  }
}
