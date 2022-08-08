import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor= '#ccc';
  @Input() progressColor = 'tomato';
  currentProgress= 70;
 
  constructor() {}
  
  ngOnInit() {
    console.log('onInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngOnChanges() {
    console.log('onChanges', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngDoCheck() {
    console.log('doCheck'); 
    if (this.progress == this.currentProgress){
      this.progressColor = '#bbb';
    }
    else {
      this.progressColor = 'tomato';
    }
  }
  ngAfterContentInit() {
    console.log('afterInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngAfterContentChecked() {
    console.log('afterChecked', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngAfterViewInit() {
    console.log('afterViewInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngAfterViewChecked() {
    console.log('afterViewChecked', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
  ngOnDestroy() {
    console.log('ProBarComponent: onDestroy'); 
 }
}