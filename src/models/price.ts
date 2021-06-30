import { User } from "./user";

export class Price {
  '@context' : string ;
  '@id' : string;
  '@type' : string;
  id!: number;
  idUser: any;
  coefBeads?:number;
  coefBracelet?:number;
  coefComponents :number;
  displayPrice:number;
  displayPriceByModel:number;
  priceModel1:number;
  priceModel2:number;
  priceModel3:number;
  priceModel4:number;
  priceModel5:number;
  priceModel6:number;
  priceModel10:number;



  constructor( 
    
    idUser?: User,
    coefBeads?:	number,
    coefBracelet?:	number,
    coefComponents? :	number,
    displayPrice?:	number,
    displayPriceByModel?:	number,
    priceModel1?:	number,
    priceModel2?:	number,
    priceModel3?:	number,
    priceModel4?:	number,
    priceModel5?:	number,
    priceModel6?	:number,
    priceModel10?:	number,
    ) {

    this.idUser = idUser || {id : 0};
    this.coefBeads = coefBeads || 2.8 ; 
    this.coefBracelet = coefBracelet || 2.5;
    this.coefComponents =coefComponents || 2.8;
    this.displayPrice =displayPrice|| 1;
    this.displayPriceByModel = displayPriceByModel || 0;
    this.priceModel1 = priceModel1|| 0;
    this.priceModel2 = priceModel2 || 0;
    this.priceModel3 = priceModel3 || 0;
    this.priceModel4= priceModel4|| 0;
    this.priceModel5 = priceModel5 || 0;
    this.priceModel6 = priceModel6 || 0;
    this.priceModel10 = priceModel10|| 0;

  }

}

export interface Price {
  'hydra:member': Array<Price>
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

