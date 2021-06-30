import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Distributor } from 'src/models/distributor';
import { User } from 'src/models/user';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  public totalPros :number|null = null;
  public arrayLastFivePros : Array<User> = [];

  public totalDistri :number|null = null;
  public arrayLastFiveDistri : Array<Distributor> = [];

  apiURL = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<User>(this.apiURL + 'users?page=1' + this.httpOptions)
    .subscribe(
      (result)=> { 
        this.totalPros = result['hydra:totalItems'];
        let arrayTemp = result['hydra:member'];
        for (let i=0; i<5; i++){
          this.arrayLastFivePros.push(arrayTemp[i]);
        }
      },
       (err) => {console.error(err);
      }
    );

    this.httpClient.get<Distributor>(this.apiURL + 'distributors?page=1' + this.httpOptions)
    .subscribe(
      (result)=> { 
        this.totalDistri = result['hydra:totalItems'];
        let arrayTemp = result['hydra:member'];
        for (let i=0; i<5; i++){
          this.arrayLastFiveDistri.push(arrayTemp[i]);
        }
      },
       (err) => {console.error(err);
      }
    );
  }

}
