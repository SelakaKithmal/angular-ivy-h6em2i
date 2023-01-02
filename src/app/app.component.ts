import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  arr1 = ['1256', '1256', '1256'];
  arr2 = ['1256', '8259', '1256'];

  checkValues() {
    if (this.equalsCheck(this.arr1, this.arr2)) {
      alert('The arrays have the same elements.');
    } else {
      alert('The arrays have different elements.');
    }
  }

  equalsCheck = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);
}
