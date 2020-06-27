import {Component, AfterViewInit} from '@angular/core';

import {NavService} from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
  }
}
