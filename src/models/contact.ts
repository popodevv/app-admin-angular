
export class Contact {
  '@context' : string ;
  '@id' : string;
  '@type' : string;
  id: number;
  name:string;
  email:string;
  phone:string;
  message:string;
  dateAdd:Date;
 

  constructor( 
    id?: number,
    name?:string,
    email?:string,
    phone?:string,
    message?:string,
    dateAdd?:Date,
    ) {


    this.id = id || 0;
    this.name = name || '';
    this.email =email || '';
    this.phone =phone|| '';
    this.message = message || '';
    this.dateAdd = dateAdd || new Date;

  }

}

export interface Contact {
  'hydra:member': Array<Contact>;
  'hydra:totalItems' : number;
  'hydra:view' : {
      '@id' : string;
      '@type' : string;
      'hydra:first' : string;
      'hydra:last' : string;
      'hydra:next'? : string;
      'hydra:previous'? : string;
  };

}



