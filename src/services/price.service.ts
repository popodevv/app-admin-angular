
import { Injectable } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Price } from 'src/models/price';
import { User } from 'src/models/user';



@Injectable({
  providedIn: 'root'
})
export class PriceService {

  apiURL = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/user_prices';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private router: Router, private http: HttpClient) {

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
  getPrices(): Observable<any> {
    return this.http.get<Price[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPriceById(idPrice: number): Observable<Price> {
    return this.http.get<Price>(this.apiURL + '/' + idPrice)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addPrice(Price: Price): Observable<Price> {
    return this.http.post<Price>(this.apiURL, Price, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePrice(PriceToUpdate: Price): Observable<Price> {
    return this.http.put<Price>(this.apiURL + '/' + PriceToUpdate.id, PriceToUpdate, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  deletePrice(idPriceToDelete: number): Observable<Price> {
    return this.http.delete<Price>(this.apiURL + '/' + idPriceToDelete )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }




}