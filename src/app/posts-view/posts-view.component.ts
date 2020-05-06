import { Component, OnInit } from '@angular/core';
import { AwwServiceService } from '../aww-service.service';
import { Posts } from '../interfaces/post';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  posts:Posts;

  constructor(private swService: AwwServiceService) { }

  ngOnInit(): void {
    this.swService.getPosts().subscribe(
      (data: Posts) => this.posts = { ...data }, 
      error => console.error(error)
    );
  }

}
