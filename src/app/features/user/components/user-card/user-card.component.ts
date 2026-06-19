import { Component, Input } from '@angular/core';
import { UserReq } from '../../models/user-req.model';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: UserReq;

  get initials(): string {
    return this.user.name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
