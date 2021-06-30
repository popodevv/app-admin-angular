import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactCollectionFilter } from 'src/interface/contact-filters';

import { Contact } from 'src/models/contact';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contacts : Array<Contact> = []; 
  public isLoading: boolean |null = null;

  public filters : ContactCollectionFilter = {
    email: '',
    name: '',
    dateAdd : '',
    phone : ''
  }

  public contactsArray : Array<Contact> = [];


  constructor(private contactService: ContactService, 
              private router: Router, 
              private HttpClient: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    return this.contactService.getContacts().subscribe((data) => {
      this.contacts = data['hydra:member'];
      this.contactsArray = data['hydra:member'];
      this.isLoading = false;
    });
  }


  public deletecontact(index:number): void {    
    if (confirm('Etes-vous sur de vouloir supprimer ce compte ?')) {
      this.HttpClient.delete<Contact>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php/api/contacts/'+index)
        .subscribe(
          (data) => {
            alert("suppression confirmée !");   
            this.router.navigate(['/contact/list']);      
          },
          (error)=> {
            console.error('erreur lors de la suppression', error);
          }          
        );
    }
  }

  public applyFilters():void {
    let url = '/api/contacts?';

    for (const key of Object.keys(this.filters)){
      if (key in this.filters) {
        const val = this.filters[key as keyof ContactCollectionFilter];

        if (val !== ''){
          url +=  key + '=' + val;
        }
      }
    }
    //console.log(url);
    
    this.HttpClient.get<Contact>('http://127.0.0.1:8888/stilivita/admin_api/public/index.php'+url)
    .subscribe(
      (data)=> {
        this.contacts = data['hydra:member'];
      }
    );
  }


}

