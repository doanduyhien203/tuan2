import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
  @Input() set progress(val: number){
    if(typeof val !== "number"){
      const progress = Number (val);
      if (Number.isNaN(progress)){
        this._progress = 0;
      }else {
        this._progress = progress;
      }
    }
    console.log ({val});
    
    this._progress = val;
  }
  private _progress = 30;
  get progress(){
    return this._progress;
  }
//  @Input() progress = 50;
  @Input() backgroundColor= '#ccc';
  @Input() progressColor = 'tomato';
  changePro = 60;
 
  constructor() {}
  
  ngOnInit() {
    console.log('onInit', {
      
    });
  }
  ngOnChanges() {
    console.log('onChanges', {
      progress : this.progress,
      backgroundColor : this.backgroundColor,
      progressColor : this.progressColor,
    });
  }
  ngDoCheck() {
    console.log('doCheck:' + this.progress); 
    if (this.progress == this.changePro){
      this.progressColor = '#bbb';
    }
    else {
      this.progressColor = 'tomato';
    }
  }
  
}