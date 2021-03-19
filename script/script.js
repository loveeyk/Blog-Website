var Locations = /** @class */ (function () {
    function Locations(lCity, lZipCode, lAdress, lImg, lRestName) {
        this.city = lCity;
        this.zipCode = lZipCode;
        this.adress = lAdress;
        this.img = lImg;
        this.restaurantName = lRestName;
    }
    Locations.prototype.display = function () {
        return " <div class=\"card w-50 m-2\"><img class=\"card-img-top \" src=\"" + this.img + " \"></img> \n        <h2 class= \"card-title\">" + this.restaurantName + "</h2>\n        <p class= \"card-text\">Location: " + this.city + " : \" \"\n        <p class= \"card-text\">Color: " + this.adress + ", \" \" " + this.zipCode + "</p>\n        </div>";
    };
    return Locations;
}());
