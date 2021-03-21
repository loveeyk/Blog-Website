import { __Location } from "./Location.js";
export class __Place extends __Location {
    constructor(locationName, country, city, zipCode, adress, imgUrl, desc, creationDate) {
        super(locationName, country, city, zipCode, adress, imgUrl, desc, creationDate);
    }
    display() {
        return super.display("Visit this Place");
    }
}
