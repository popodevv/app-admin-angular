import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distributor } from 'src/models/distributor';
import { User } from 'src/models/user';
import { DistributorService } from 'src/services/distributor.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-distri',
  templateUrl: './add-distri.component.html',
  styleUrls: ['./add-distri.component.scss']
})
export class AddDistriComponent implements OnInit {

 //public distributorAdd = new Distributor();

  public distributor!: Distributor;
  public users: User[] = [];

  public isLoading!: number;


  constructor(private router: Router, 
              private distributorService: DistributorService,
              private http: HttpClient,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = 0;
    this.distributor = new Distributor();
    this.userService.getUsers().subscribe(
      then => {
      this.users = then['hydra:member'];
      this.isLoading++;
    });

  }   
  


  addDistributor() {
       this.distributorService.addDistributor(this.distributor).subscribe((then => {
         this.router.navigate(['/distri/list']);
         alert("Compte distributeur ajouté");
       }));
       console.log(this.distributorService);

   }


  setUser($event:any) {
    this.distributor.idUser = '/api/users/' + $event.currentTarget.value;
    //this.distributor.idUser =  $event.currentTarget.value;
    //console.log(this.distributor.idUser);
  }

}

