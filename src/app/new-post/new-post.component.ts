import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { UsersPostsService } from '../users-posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit, OnDestroy {
  model = {
    Title: '',
    content: '',
  };
  ID: number = 0;
  C_subs: Subscription;

  constructor(
    private userPostsService: UsersPostsService,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    this.C_subs = this.communicationService.currentMessage.subscribe((mssg) => {
      this.ID = mssg;
    });
  }

  onSubmit(dataForm: any) {
    this.userPostsService.addPost(this.ID, this.model).subscribe((data) => {
      // after storing data, getting it when data is pushed to DB...
      this.communicationService.userPostsCommunication(this.ID);
    });

    dataForm.reset();
  }

  ngOnDestroy() {
    this.C_subs.unsubscribe();
  }
}
