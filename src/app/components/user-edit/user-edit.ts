import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.html',
  standalone: false,
  styleUrls: ['./user-edit.css']
})
export class UserEdit implements OnInit {

  user?: User;
  updated = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log('ID recibido:', id);

      if (id) {
        this.usersService.getById(id).subscribe((data: User) => {
          console.log('Usuario recibido:', data);
          this.user = data;
        });
      }
    });
  }

  updateUser(): void {
    if (this.user && this.user.id) {
      this.usersService.update(this.user.id, this.user).subscribe(() => {
        this.updated = true;
        alert('Usuario actualizado correctamente');
        this.router.navigate(['/users']);
      });
    }
  }
}
