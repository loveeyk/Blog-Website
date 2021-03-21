import { __Location } from "./Location.js";
export class __Place extends __Location {
    constructor(locationName, city, zipCode, adress, imgUrl, desc) {
        super(locationName, city, zipCode, adress, imgUrl, desc);
    }
    display() {
        return super.display("Visit this Place");
    }
}
