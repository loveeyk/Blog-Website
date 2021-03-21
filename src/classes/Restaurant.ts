import { __Location } from "./Location.js";

export class __Restaurant extends __Location {
    phone: string;
    cuisineType: string;
    webAdress: string;

    constructor(
        locationName: string,
        country:string,
        city: string,
        zipCode: string,
        street: string,
        imgUrl: string,
        desc: string,
        phone: string,
        cuisineType: string,
        webAdress: string,
        creationDate: Date
    ) {
        super(locationName,
            city,
            country,
            zipCode,
            street,
            imgUrl,
            desc,
            creationDate)
        this.phone = phone;
        this.cuisineType = cuisineType;
        this.webAdress = webAdress;
    }

    display() {
        let html = `
        <div class="info-restaurants p-3">
            <div class="row">
                <div class="col-3"><span class="material-icons fw-bolder fs-2">phone</span></div>
                <div class="col-9"><p>${this.phone}</p></div>
            </div>
            <div class="row">
                <div class="col-3"><span class="material-icons fw-bolder fs-2">restaurant</span></div>
                <div class="col-9"><p>${this.cuisineType}</p></div>
            </div>
            <div class="row">
                <div class="col-3"><span class="material-icons fw-bolder fs-2">public</span></div>
                <div class="col-9"><a href="${this.webAdress}">${this.webAdress.substring(11)}</a></div>
            </div>
        </div>
        `
        
        let card = super.display("Book A Table")
        let insert = this.returnAsHTML(html,'info-restaurants')
        card.querySelector('.card-body').appendChild(insert)
        

        return card;
    }
}