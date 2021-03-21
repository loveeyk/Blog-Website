import { __Location } from "./Location.js";

export class __Event extends __Location {

    private eventDate: Date;
    private ticketPrice: number;
    public isActive:boolean;
     
    constructor(
        locationName:string,
        city:string,
        zipCode:string,
        street:string,
        imgUrl:string,
        desc:string,
        eventDate:Date,
        ticketPrice:number,
        isActive?:boolean
    ){
        super(locationName,city,zipCode,street,imgUrl,desc)
        this.eventDate = eventDate;
        this.ticketPrice = ticketPrice;
        this.isActive = isActive === undefined ? false : isActive;
    }
    getDateAsString(){
        return this.eventDate.toLocaleDateString()
    }
    getTimeAsString(){
        return this.eventDate.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })
    }
    display() {
        return this.returnAsHTML(`<div class="carousel-item ${this.isActive ? "active" : ""}">
        <img src="${this.imgUrl}" class="d-block w-100" alt=${this.locationName.toLowerCase()} />
      </div>`,'carousel-item');
    }
}