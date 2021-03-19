class Locations {
    restaurantName:string;
    city:string;
    zipCode:number;
    adress:any;
    img:string;

    constructor(lCity, lZipCode, lAdress, lImg, lRestName){
        this.city = lCity;
        this.zipCode = lZipCode;
        this.adress = lAdress;
        this.img = lImg;
        this.restaurantName = lRestName;

    }

    display(){

        return ` <div class="card w-50 m-2"><img class="card-img-top " src="${this.img} "></img> 
        <h2 class= "card-title">${this.restaurantName}</h2>
        <p class= "card-text">Location: ${this.city} : " "
        <p class= "card-text">Color: ${this.adress}, " " ${this.zipCode}</p>
        </div>`
        
    }

}