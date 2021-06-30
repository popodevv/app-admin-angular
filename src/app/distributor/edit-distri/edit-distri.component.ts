import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distributor } from 'src/models/distributor';
import { DistributorService } from 'src/services/distributor.service';

@Component({
  selector: 'app-edit-distri',
  templateUrl: './edit-distri.component.html',
  styleUrls: ['./edit-distri.component.scss']
})
export class EditDistriComponent implements OnInit {

  public idDistributor: number | null = null;
 
  public distributorUpdate! : Distributor 
  
  public isLoading: boolean |null = null;


  constructor(private route: ActivatedRoute, private distributorService:DistributorService, private router:Router) { }

  ngOnInit(): void {
    this.idDistributor = +Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.distributorService.getdistributorById(this.idDistributor).subscribe((data: Distributor) => {
      this.distributorUpdate = data;
      this.isLoading = false;
    });
  }

  updateDistributor() {
    return this.distributorService.updateDistributor(this.distributorUpdate).subscribe((then => {
      this.router.navigate(['/distri/list']);
    }));
  }

}
