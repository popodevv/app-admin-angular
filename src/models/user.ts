export class User {
  '@context' : string ;
  '@id' : string;
  '@type' : string;
  id!: number;
  email:string;
  password:string;
  name:string;
  firstname:string;
  company:string;
  address1:string;
  address2?:string;
  postal:string;
  city:string;
  demo:number;
  datecreation:Date;
  adel:number;
  subdomain:string;
  psShopId:number;

  constructor( 
    
    email?:string,
    password?:string,
    name?:string,
    firstname?:string,
    company?:string,
    address1?:string,
    address2?:string,
    postal?:string,
    city?:string,
    demo?:number,
    datecreation?:Date,
    adel?:number,
    subdomain?:string,
    psShopId?:number,
    ) {

    this.email = email || '';
    this.password = password || '';
    this.name = name || '';
    this.firstname = firstname || '';
    this.company = company || '';
    this.address1 = address1 || '';
    this.address2 = address2 || '';
    this.postal = postal || '';
    this.city = city || '';
    this.demo = demo || 0 || 1;
    this.datecreation = new Date;
    this.adel = adel || 0 || 1;
    this.subdomain = subdomain || '';
    this.psShopId = psShopId || 0;
  }

}

export interface User {
  'hydra:member': Array<User>;
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

