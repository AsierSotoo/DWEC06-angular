import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.html',
  standalone: false, 
  styleUrls: ['./user-create.css']
})
export class UserCreate {

  user: User = {
    name: '',
    username: '',
    email: ''
  };

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  createUser(): void {
    this.usersService.create(this.user).subscribe(() => {
      alert('Usuario creado correctamente');
      this.router.navigate(['/users']);
    });
  }
}
