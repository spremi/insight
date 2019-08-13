import { Component } from '@angular/core';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  ready = false;

  constructor(private configSvc: ConfigService) {
    this.configSvc.load().subscribe((flag) => {
      this.ready = flag;
    });
  }
}
