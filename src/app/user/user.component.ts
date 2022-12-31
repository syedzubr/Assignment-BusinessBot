import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { userData } from '../userInterface';
import { UsersPostsService } from '../users-posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() userData: userData;

  constructor(private communicationService: CommunicationService) {}
  
  ngOnInit(): void {}

  getUserPost(event: any) {
    
    let e = event.target;
    while(e.className != "user-container"){
     e = e.parentElement;
    }
    this.communicationService.userPostsCommunication(e.id);
  }
}
