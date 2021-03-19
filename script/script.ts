//parent class Location

class Locations {
    restaurantName:string;
    description:string;
    city:string;
    zipCode:number;
    adress:any;
    img:string;

    constructor(lCity, lZipCode, lAdress, lImg, lRestName, lDescription){
        this.city = lCity;
        this.zipCode = lZipCode;
        this.adress = lAdress;
        this.img = lImg;
        this.restaurantName = lRestName;
        this.description = lDescription;

    }

    display(){

        return ` <div class=""><img class="" src="${this.img} "></img> 
        <h2 class= "">${this.restaurantName}</h2>
        <p class= "">Speciality about us: ${this.description}</p>
        <p class= "">Location: ${this.city} : " "
       ${this.adress}, " " ${this.zipCode}</p>
        </div>`
        
    }

}

// child class Restaurant 

class restaurant extends Locations{
    cuisineType:string;
    telNumber:number;
    webAdress:string;

    constructor(lCity, lZipCode, lAdress, lImg, lRestName, lDescription, rCuisType, rNumber, rWeb){
        super(lCity, lZipCode, lAdress, lImg, lRestName, lDescription)
        this.cuisineType = rCuisType;
        this.telNumber = rNumber;
        this.webAdress = rWeb;
    }

    displayRestaurantInfos(){
        return super.display + `<p class="">Best greetings for ${this.cuisineType} kitchen.</p>
        <p class="">For bookings and further information, do not hesitate to call on following number ${this.telNumber}or leave us an e-mail ${this.webAdress} </p>
        `
    }
}

//child class Events

class events extends Locations{
eventDate: number;
eventTime: number;
ticketPrice: number;

constructor(lCity, lZipCode, lAdress, lImg, lRestName, lDescription, eDate, eTime, ePrice){
    super(lCity, lZipCode, lAdress, lImg, lRestName, lDescription);
    this.eventDate = eDate;
    this.eventTime = eTime;
    this.ticketPrice = ePrice;
}
 displayEventInfos(){
     return super.display + `<p class="">Event begins on ${this.eventDate} at ${this.eventTime}</p>
     <p class="">Ticket Price Information: ${this.ticketPrice}</p>`
 }
}