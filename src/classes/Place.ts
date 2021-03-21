import { __Location } from "./Location.js";

export class __Place extends __Location {

  constructor(
    locationName:string,
    city:string,
    zipCode:string,
    adress:string,
    imgUrl:string,
    desc:string
) {
    super(locationName,city,zipCode,adress,imgUrl,desc)
  }

  display(){
      return super.display("Visit this Place")   
  }


}