import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { postData } from '../postInterface';
import { UsersPostsService } from '../users-posts.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit, OnDestroy {
  ID: number = 0;
  POSTS: postData[];
  C_subs: Subscription;

  constructor(
    private communicationService: CommunicationService,
    private usersPostsService: UsersPostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.C_subs = this.communicationService.currentMessage.subscribe((mssg) => {
      this.ID = mssg;

      this.usersPostsService.getUserPost(this.ID).subscribe((data) => {
        this.POSTS = data;
      });
    });
  }

  ngOnDestroy() {
    this.C_subs.unsubscribe();
  }
}
