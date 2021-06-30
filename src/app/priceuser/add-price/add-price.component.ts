import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Price } from 'src/models/price';
import { User } from 'src/models/user';
import { PriceService } from 'src/services/price.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.scss']
})
export class AddPriceComponent implements OnInit {

  //public priceAdd = new Price();
 // public isLoading: boolean |null = null;
  
  public price!: Price;
  public users : User[] = [];
 
  public isLoading!: number;


  constructor(private router: Router, 
              private priceService: PriceService,
              private http: HttpClient,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = 0;
    this.price = new Price();
    this.userService.getUsers().subscribe(
      then => {
      this.users = then['hydra:member'];
      this.isLoading++;
    });
    

}

  addPrice() {
     
       this.priceService.addPrice(this.price).subscribe((then => {
         alert("Compte prix ajouté");
         this.router.navigate(['/']);
       })); 
       console.log(this.price);
   }

   setUser($event:any) {
    this.price.idUser = '/api/users/' + $event.currentTarget.value;
  }
  


}

