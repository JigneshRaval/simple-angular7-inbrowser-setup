import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `<h1>My First Angular {{version}} App using system.js</h1>`
})
export class AppComponent {
  public version : string = 'v7.2.15';
}
