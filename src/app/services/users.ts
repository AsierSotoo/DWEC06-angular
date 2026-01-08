import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private localUsers: User[] = [];

  constructor(private http: HttpClient) {}

  // =====================
  // READ ALL
  // =====================
  getAll(): Observable<User[]> {
    // 👉 Si ya tenemos usuarios en memoria, no volvemos a llamar a la API
    if (this.localUsers.length > 0) {
      return of(this.localUsers);
    }

    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => {
        this.localUsers = users;
      })
    );
  }

  // =====================
  // READ BY ID
  // =====================
  getById(id: number): Observable<User> {
    const localUser = this.localUsers.find(u => u.id === id);
    if (localUser) {
      return of(localUser);
    }
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // =====================
  // CREATE
  // =====================
  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap(() => {
        user.id = Date.now();
        this.localUsers.push(user);
      })
    );
  }

  // =====================
  // UPDATE
  // =====================
  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user).pipe(
      tap(() => {
        const index = this.localUsers.findIndex(u => u.id === id);
        if (index !== -1) {
          this.localUsers[index] = user;
        }
      })
    );
  }

  // =====================
  // DELETE
  // =====================
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.localUsers = this.localUsers.filter(user => user.id !== id);
      })
    );
  }
}
