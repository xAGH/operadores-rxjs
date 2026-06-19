import { Component, Input } from '@angular/core';
import { UserReq } from '../../models/user-req.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Input() users: UserReq[] | null = [];
}
