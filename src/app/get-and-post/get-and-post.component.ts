import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-and-post',
  templateUrl: './get-and-post.component.html',
  styleUrls: ['./get-and-post.component.css']
})
export class GetAndPostComponent implements OnInit {

  posts$: Object;
  newPost$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getButton(){
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

  postButton() {
     this.data.createPost().subscribe(
       data => this.newPost$ = data
     );
  }

}
