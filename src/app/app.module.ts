import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './authours/author-detail.component';
import { AuthorListComponent } from './authours/author-list.componrent';
import { FlexComponent } from './flex.component';

import { ProBarComponent } from './pro-bar/pro-bar.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProBarComponent,
    AuthorDetailComponent,
    AuthorListComponent,
    ToggleComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
