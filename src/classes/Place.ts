import { __Location } from "./Location.js";

export class __Place extends __Location {

  constructor(
    locationName:string,
    country:string,
    city:string,
    zipCode:string,
    adress:string,
    imgUrl:string,
    desc:string,
    creationDate:Date
) {
    super(locationName,country,city,zipCode,adress,imgUrl,desc,creationDate)
  }

  display(){
      return super.display("Visit this Place")   
  }


}