import { Component, OnInit } from '@angular/core';
import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {private userPostService: UserPostService }

  

}
