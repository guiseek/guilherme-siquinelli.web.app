import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'g-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  text: string;
  constructor(private route: ActivatedRoute) {
    this.text = this.route.snapshot.data.text;
  }
}
