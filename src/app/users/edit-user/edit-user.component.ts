import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public idUser: number | null = null;
 
  public userUpdate! : User 
  
  public isLoading: boolean |null = null;


  constructor(private route: ActivatedRoute, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.idUser = +Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.userService.getUserById(this.idUser).subscribe((data: User) => {
      this.userUpdate = data;
      this.isLoading = false;
    });
  }

  updateUser() {
    return this.userService.updateUser(this.userUpdate).subscribe((then => {
      this.router.navigate(['/user/list']);
    }));
  }

  

}
