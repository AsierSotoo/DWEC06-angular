import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  standalone: false,
  styleUrls: ['./users-list.css']
})
export class UsersList implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }

  deleteUser(id: number): void {
    if (confirm('¿Seguro que quieres eliminar este usuario?')) {
      this.usersService.delete(id).subscribe(() => {
        this.users = this.users.filter(user => user.id !== id);
        this.filterUsers();
      });
    }
  }
}
