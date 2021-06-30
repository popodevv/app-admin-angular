import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddPriceComponent } from './priceuser/add-price/add-price.component';
import { EditPriceComponent } from './priceuser/edit-price/edit-price.component';
import { ListPriceComponent } from './priceuser/list-price/list-price.component';
import { AddDistriComponent } from './distributor/add-distri/add-distri.component';
import { EditDistriComponent } from './distributor/edit-distri/edit-distri.component';
import { ListDistriComponent } from './distributor/list-distri/list-distri.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WithNamesPipe } from 'src/pipes/with-name.pipe';
import { ContactListComponent } from './contact-list/contact-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    AddPriceComponent,
    EditPriceComponent,
    ListPriceComponent,
    AddDistriComponent,
    EditDistriComponent,
    ListDistriComponent,
    WithNamesPipe,
    ContactListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
