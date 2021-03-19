//parent class Location
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(lCity, lZipCode, lAdress, lImg, lRestName, lDescription) {
        this.city = lCity;
        this.zipCode = lZipCode;
        this.adress = lAdress;
        this.img = lImg;
        this.restaurantName = lRestName;
        this.description = lDescription;
    }
    Locations.prototype.display = function () {
        return " <div class=\"\"><img class=\"\" src=\"" + this.img + " \"></img> \n        <h2 class= \"\">" + this.restaurantName + "</h2>\n        <p class= \"\">Speciality about us: " + this.description + "</p>\n        <p class= \"\">Location: " + this.city + " : \" \"\n       " + this.adress + ", \" \" " + this.zipCode + "</p>\n        </div>";
    };
    return Locations;
}());
// child class Restaurant 
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(lCity, lZipCode, lAdress, lImg, lRestName, lDescription, rCuisType, rNumber, rWeb) {
        var _this = _super.call(this, lCity, lZipCode, lAdress, lImg, lRestName, lDescription) || this;
        _this.cuisineType = rCuisType;
        _this.telNumber = rNumber;
        _this.webAdress = rWeb;
        return _this;
    }
    restaurant.prototype.displayRestaurantInfos = function () {
        return _super.prototype.display + ("<p class=\"\">Best greetings for " + this.cuisineType + " kitchen.</p>\n        <p class=\"\">For bookings and further information, do not hesitate to call on following number " + this.telNumber + "or leave us an e-mail " + this.webAdress + " </p>\n        ");
    };
    return restaurant;
}(Locations));
//child class Events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return events;
}(Locations));
