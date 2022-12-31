import { Component, OnInit } from '@angular/core';
import { userData } from '../userInterface';
import { UsersPostsService } from '../users-posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  USERS : userData[] = [];

  constructor(private userPostService: UsersPostsService) { }
  
  ngOnInit(): void {
    this.userPostService.getUsers().subscribe((data) => {
      this.USERS = data
    });
  }

}
