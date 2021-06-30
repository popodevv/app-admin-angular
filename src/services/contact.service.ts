
import { Injectable } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Price } from 'src/models/price';
import { Contact } from 'src/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  Contacts: Contact[];
  //http://localhost:8888/stilivita/admin_api/public/index.php/api/Contacts?page=1
  apiURL = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/contacts';
  httpOptions = {
    headers: new HttpHeaders({

      'Content-Type': 'application/json'
    })
  };
  constructor(private router: Router, private http: HttpClient) {
    this.Contacts = [];
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
  getContacts(): Observable<any> {
    return this.http.get<Contact[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getContactById(idContact: number): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/' + idContact)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addContact(Contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiURL, Contact, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateContact(ContactToUpdate: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.apiURL + '/' + ContactToUpdate.id, ContactToUpdate, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  deleteContact(idContactToDelete: number): Observable<Contact> {
    return this.http.delete<Contact>(this.apiURL + '/' + idContactToDelete )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPriceByIdContact(idContact: number): Observable<Price[]> {
    return this.http.get<Price[]>(this.apiURL +'/'+ idContact +'/prices')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



}