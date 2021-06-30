import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Price } from 'src/models/price';
import { PriceService } from 'src/services/price.service';

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrls: ['./list-price.component.scss']
})
export class ListPriceComponent implements OnInit {

  public prices : Array<Price> = []; 
  public isLoading: boolean |null = null;


  constructor(private priceService: PriceService, 
              private router: Router, 
              private HttpClient: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    return this.priceService.getPrices().subscribe((data) => {
      this.prices = data['hydra:member'];
      this.isLoading = false
    });
  }



  public deletePrice(index:number): void {    
    if (confirm('Etes-vous sur de vouloir supprimer ce compte ?')) {
      this.HttpClient.delete<Price>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/user_prices/'+index)
        .subscribe(
          (data) => {
            alert("suppression confirmée !"); 
            this.router.navigate(['/price/list']);       
          },
          (error)=> {
            console.error('erreur lors de la suppression', error);
          }          
        );
    }
  }
}
