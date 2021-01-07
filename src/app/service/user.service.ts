import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.api);
  }

  getUserById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  create(user: IUser): Observable<any> {
    return this.http.post<IUser>(this.api, user);
  }

  update(user: IUser): Observable<any> {
    return this.http.put<IUser>(`${this.api}/${user.id}`, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}

