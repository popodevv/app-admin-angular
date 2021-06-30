import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public userAdd = new User();
  
  public isLoading: boolean |null = null;

  // apiUrl = 'http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api';

  chos = ['oui', 'non'];



  constructor(private router: Router, private userService: UserService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.userAdd.datecreation = new Date();
 
  }

  addUser() {

    // console.log(this.userAdd);
       this.userService.addUser(this.userAdd).subscribe((then => {
         this.router.navigate(['/price/add']);
         //alert("Compte professionnel ajouté");
       }));
   }

}
