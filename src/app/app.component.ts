import { Component, OnInit } from '@angular/core';
import { UserReq } from './features/user/models/user-req.model';
import { UserService } from './features/user/services/user.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users: UserReq[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }
}
