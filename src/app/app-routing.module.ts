import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddDistriComponent } from './distributor/add-distri/add-distri.component';
import { EditDistriComponent } from './distributor/edit-distri/edit-distri.component';
import { ListDistriComponent } from './distributor/list-distri/list-distri.component';
import { AddPriceComponent } from './priceuser/add-price/add-price.component';
import { EditPriceComponent } from './priceuser/edit-price/edit-price.component';
import { ListPriceComponent } from './priceuser/list-price/list-price.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

const routes: Routes = [
  {path: '', component: DashbordComponent},
  {path: 'user/list', component:ListUserComponent},
  {path: 'user/add', component:AddUserComponent},
  {path: 'user/edit/:id', component:EditUserComponent},
  {path: 'price/list', component:ListPriceComponent},
  {path: 'price/add', component:AddPriceComponent},
  {path: 'price/edit/:id', component:EditPriceComponent},
  {path: 'distri/list', component:ListDistriComponent},  
  {path: 'distri/add', component:AddDistriComponent},
  {path: 'distri/edit/:id', component:EditDistriComponent},
  {path: 'contact/list', component:ContactListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
