
import { Injectable } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Distributor } from 'src/models/distributor';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  apiURL = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/distributors';
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
  getDistributors(): Observable<any> {
    return this.http.get<Distributor[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getdistributorById(idDistributor: number): Observable<Distributor> {
    return this.http.get<Distributor>(this.apiURL + '/' + idDistributor)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addDistributor(Distributor: Distributor): Observable<Distributor> {
    return this.http.post<Distributor>(this.apiURL, Distributor, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDistributor(DistributorToUpdate: Distributor): Observable<Distributor> {
    return this.http.put<Distributor>(this.apiURL + '/' + DistributorToUpdate.idDistributor, DistributorToUpdate, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  deleteDistributor(idDistributorToDelete: number): Observable<Distributor> {
    return this.http.delete<Distributor>(this.apiURL + '/' + idDistributorToDelete )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


}