import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCollectionFilter } from 'src/interface/user-filters';

import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users : Array<User> = []; 
  public isLoading: boolean |null = null;

  public filters : UserCollectionFilter = {
    email: '',
    name: '',
    firstname : '',
    company : ''
  }

  public usersArray : Array<User> = [];


  constructor(private userService: UserService, 
              private router: Router, 
              private HttpClient: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    return this.userService.getUsers().subscribe((data) => {
      this.users = data['hydra:member'];
      this.usersArray = data['hydra:member'];
      this.isLoading = false;
    });
  }


  public deleteUser(index:number): void {    
    if (confirm('Etes-vous sur de vouloir supprimer ce compte ?')) {
      this.HttpClient.delete<User>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/users/'+index)
        .subscribe(
          (data) => {
            alert("suppression confirmée !");   
            this.router.navigate(['/user/list']);      
          },
          (error)=> {
            console.error('erreur lors de la suppression', error);
          }          
        );
    }
  }

  public applyFilters():void {
    let url = '/api/users?';

    for (const key of Object.keys(this.filters)){
      if (key in this.filters) {
        const val = this.filters[key as keyof UserCollectionFilter];

        if (val !== ''){
          url +=  key + '=' + val;
        }
      }
    }
    //console.log(url);
    
    this.HttpClient.get<User>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php'+url)
    .subscribe(
      (data)=> {
        this.users = data['hydra:member'];
      }
    );
  }


 
}
