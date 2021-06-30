import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorCollectionFilter } from 'src/interface/distributor-filters';
import { Distributor } from 'src/models/distributor';
import { User } from 'src/models/user';
import { DistributorService } from 'src/services/distributor.service';

@Component({
  selector: 'app-list-distri',
  templateUrl: './list-distri.component.html',
  styleUrls: ['./list-distri.component.scss']
})
export class ListDistriComponent implements OnInit {

  public distributors : Array<Distributor> = []; 
  public isLoading: boolean |null = null;



  public filters: DistributorCollectionFilter = {
    idUser:'',
    company:'',    
  };

 
  constructor(private distributorService: DistributorService, 
              private router: Router, 
              private HttpClient: HttpClient) {}


  ngOnInit() {
    this.isLoading = true;
    return this.distributorService.getDistributors().subscribe((data) => {
      this.distributors = data['hydra:member'];
      this.isLoading = false
    });
  }

  public applyFilters():void {
    let url = '/api/users?';

    for (const key of Object.keys(this.filters)){
      if (key in this.filters) {
        const val = this.filters[key as keyof DistributorCollectionFilter];

        if (val !== ''){
          url +=  key + '=' + val;
        }
      }
    }
    //console.log(url);
    
    this.HttpClient.get<Distributor>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php'+url)
    .subscribe(
      (data)=> {
        this.distributors = data['hydra:member'];
      }
    );
  }




  public deleteDistributor(index:number): void {    
    if (confirm('Etes-vous sur de vouloir supprimer ce distributeur ?')) {
      this.HttpClient.delete<Distributor>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/distributors/'+index)
        .subscribe(
          (data) => {
            alert("suppression confirmée !"); 
            this.router.navigate(['/distri/list']); 
          },
          (error)=> {
            console.error('erreur lors de la suppression', error);
          }          
        );
    }
  }


}