import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Price } from 'src/models/price';
import { PriceService } from 'src/services/price.service';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.scss']
})
export class EditPriceComponent implements OnInit {

  public idPrice: number | null = null;
 
  public priceUpdate! : Price
  
  public isLoading: boolean |null = null;


  constructor(private route: ActivatedRoute, private priceService:PriceService, private router:Router) { }

  ngOnInit(): void {
    this.idPrice = +Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.priceService.getPriceById(this.idPrice).subscribe((data: Price) => {
      this.priceUpdate = data;
      this.isLoading = false;
    });
  }

  updatePrice() {
    return this.priceService.updatePrice(this.priceUpdate).subscribe((then => {
      this.router.navigate(['/price/list']);
    }));
  }


  
}
