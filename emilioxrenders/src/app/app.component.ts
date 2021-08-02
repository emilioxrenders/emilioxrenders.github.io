import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emilioxrenders';

  constructor() {
    AOS.init();
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth" });
  }
}
