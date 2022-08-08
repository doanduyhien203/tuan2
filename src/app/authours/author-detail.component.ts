import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';
@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="select.emit(author)">Select</button>
      <button (click)="delete.emit(author.id)">X</button>
    </div>
    
  `,
  styles: [``],
})
export class AuthorDetailComponent implements OnInit {
    @Input() author : Author;
    @Output () select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<number>();
    constructor() {}
    ngOnInit() {}
    
  }