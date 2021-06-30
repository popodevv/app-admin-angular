import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Distributor } from 'src/models/distributor';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Pipe({
  name: 'withNames'
})
export class WithNamesPipe implements PipeTransform {

  transform(value: string, args?: any[]): string {
    return value.replace('/stilivita/admin_api/public/index.php/api/users/', '');
  }

}

    // transform(products: Product[], requirement: Requirement): Product[] {
    //   const filteredProducts = products.filter(product => product.requirement.id === requirement.id);
    //   return filteredProducts;
    // }
  
    // transform(distributors: Distributor[], user: User): Distributor[] {
    //   const filteredProducts = distributors.filter(distributor => distributor.idUser === user.name);
    //   return filteredProducts;
    // }


   

