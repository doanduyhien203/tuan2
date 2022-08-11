import { Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;
//  @ViewChild('toggleComp') toggleComp: ToggleComponent;// truyen string
//  @ViewChild(ToggleComponent, {static: true}) toggleComp: ToggleComponent; 
  @ViewChild('toggleButton', {static: true} ) toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef<HTMLInputElement>;
  title = 'test-test';
  name = "Angular";
  currentProgress = 30;
  question = {
    toggle1: true,
    toggle2:false,
  };
  isChecked = true;
  showLast = true;
  ngOnInit(){
    console.log(this.nameInput);
   
 /*   setTimeout (() => {
    this.nameInput.nativeElement.focus()
  }, 3000)
   console.log('onInit',this.toggleComp, this.toggleBtn); 
*/  
 }

  ngAfterViewInit(){
    this.toggleComp.changes.subscribe(console.log);
 //   console.log(this.toggleComp);
//      apiCall.subscribe(()=> {
//       this.toggleComp.toggle();
//     })
     
  }
}
