import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  baseUrl = 'http://localhost/news_app_api';
  posts$: Observable<Post[]>;

  constructor(private postService: PostService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAll();
  }

  onPostClick(postId: number) {
    this.router.navigate(['/post-single', postId])
  }

  onLogout() {
    this.authService.logout()
  }
}
