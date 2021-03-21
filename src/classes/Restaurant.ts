import { __Location } from "./Location.js";

export class __Restaurant extends __Location {
    phone: string;
    cuisineType: string;
    webAdress: string;

    constructor(
        locationName: string,
        city: string,
        zipCode: string,
        street: string,
        imgUrl: string,
        desc: string,
        phone: string,
        cuisineType: string,
        webAdress: string
    ) {
        super(locationName,
            city,
            zipCode,
            street,
            imgUrl,
            desc)
        this.phone = phone;
        this.cuisineType = cuisineType;
        this.webAdress = webAdress;
    }

    display() {
        let html = `<p class="info">${this.phone}, ${this.cuisineType}, <a href="${this.webAdress}">${this.webAdress.substring(7)}</a></p>`
        
        let card = super.display("Book A Table")
        let insert = this.returnAsHTML(html,'info')
        card.querySelector('.card-body').appendChild(insert)
        card.querySelector('.btn').classList.replace("btn-primary","btn-danger")
        return card;
    }
}