import { User } from "./user";

export class Distributor {
  '@context' : string ;
  '@id' : string;
  '@type' : string;
  idDistributor!:number;
  idUser: any;
  company:string;
  adress1:string;
  adress2:string;
  postal:string;
  city:string;
  facebook:string;
  website:string;
  phone:string;
  gpsLat:number;
  gpsLong:number;

  constructor( 

    idUser?: User,
    company?:string,
    adress1?:string,
    adress2?:string,
    postal?:string,
    city?:string,
    facebook?:string,
    website?:string,
    phone?:string,
    gpsLat?:number,
    gpsLong?:number,
    ) {


    this.idUser = idUser || {id : 0};
    this.company = company || '';
    this.adress1 =adress1 || '';
    this.adress2 =adress2|| '';
    this.postal = postal || '';
    this.city = city|| '';
    this.facebook = facebook || '';
    this.website = website || '';
    this.phone= phone|| '';
    this.gpsLat = gpsLat || 0;
    this.gpsLong = gpsLong || 0;


  }

}

export interface Distributor {
  'hydra:member': Array<Distributor>;
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

export interface DistributorFilter {
  name : string;
  postalCode : string,
  city : string
}

