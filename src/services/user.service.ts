
import { Injectable } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

import { Price } from 'src/models/price';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  //http://localhost:8888/stilivita/admin_api/public/index.php/api/users?page=1
  apiURL = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/users';
  httpOptions = {
    headers: new HttpHeaders({

      'Content-Type': 'application/json'
    })
  };
  constructor(private router: Router, private http: HttpClient) {
    this.users = [];
  }
  handleError(error:any)  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getUsers(): Observable<any> {
    return this.http.get<User[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getUserById(idUser: number): Observable<User> {
    return this.http.get<User>(this.apiURL + '/' + idUser)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(userToUpdate: User): Observable<User> {
    return this.http.put<User>(this.apiURL + '/' + userToUpdate.id, userToUpdate, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  deleteUser(idUserToDelete: number): Observable<User> {
    return this.http.delete<User>(this.apiURL + '/' + idUserToDelete )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPriceByIdUser(idUser: number): Observable<Price[]> {
    return this.http.get<Price[]>(this.apiURL +'/'+ idUser +'/prices')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



}