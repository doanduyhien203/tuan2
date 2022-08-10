import { Component, ElementRef, ViewChild} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  @ViewChild('toggleComp') toggleComp: ToggleComponent;// truyen string
  @ViewChild(ToggleComponent, {static: true}) toggleComp: ToggleComponent; 
  @ViewChild('toggleButton', {static: true} ) toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef<HTMLInputElement>;
  title = 'test-test';
  name = "Angular";
  currentProgress = 30;
  isChecked = true;
  ngOnInit(){
    setTimeout (() => {
    this.nameInput.nativeElement.focus()
  }, 3000)
    console.log('onInit',this.toggleComp, this.toggleBtn); 
  }
  ngAfterViewInit(){
    console.log(this.toggleComp);
//      apiCall.subscribe(()=> {
//       this.toggleComp.toggle();
//    })
  }
}
