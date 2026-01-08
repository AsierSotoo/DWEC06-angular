import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css'],
  standalone: false
})
export class UserDetail implements OnInit {

  user?: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', id);

    this.usersService.getById(id).subscribe((data: User) => {
      console.log('Usuario recibido:', data);
      this.user = data;
    });
  }
}
