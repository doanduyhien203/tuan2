import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name = 'Angular';
  title = 'test-test';
  currentProgress = 50;
  isChecked = true;
}
