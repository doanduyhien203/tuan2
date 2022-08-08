import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors';
@Component({
    selector: 'app-author-list',
    template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (select) ="onSelected($any($event))"
      (delete)="onDelete($any($event))"
    >
    </app-author-detail>
    <br>
    <div>
      current Author select: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
    `,
    styles: [``],
  })
  export class AuthorListComponent implements OnInit {
    authors = authors;
    currentAuthor = authors[0];
    constructor() {}
    ngOnInit() {}
    onSelected (selectedAuthor: Author)
    {
        this.currentAuthor = selectedAuthor;
    }    
    onDelete(id:number) {
      this.authors = this.authors.filter((author) => {
        return author.id !== id ;
      }
      );
      if (this.currentAuthor.id === id){
        this.currentAuthor = this.authors [0];
      }
    }
  }