import {Component} from '@angular/core';

@Component({
  selector: 'nx-micro-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mtg-singles';
  list = [
    {
      title: 'A',
      description: 'A desc',
      description_sub: 'A sub desc',
    },
    {
      title: 'B',
      description: 'B desc',
      description_sub: 'B sub desc',
    },
  ];
}
