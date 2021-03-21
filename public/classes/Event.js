import { __Location } from "./Location.js";
export class __Event extends __Location {
    constructor(eventName, country, city, zipCode, street, imgUrl, desc, eventDate, ticketPrice, creationDate) {
        super(eventName, country, city, zipCode, street, imgUrl, desc, creationDate);
        this.eventDate = eventDate;
        this.ticketPrice = ticketPrice;
    }
    getDateAsString() {
        return this.eventDate.toLocaleDateString();
    }
    getTimeAsString() {
        return this.eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    display() {
        let html = `
        <div class="info-events p-3">
            <div class="row">
                <div class="col-4"><span class="material-icons fw-bolder fs-2">event</span></div>
                <div class="col-8 "><p>${this.getDateAsString()}</p></div>
            </div>
            <div class="row">
            <div class="col-4"><span class="material-icons fw-bolder fs-2">schedule</span></div>
            <div class="col-8"><p>${this.getTimeAsString()}</p></div>
        </div>
            <div class="row">
                <div class="col-4"><span class="material-icons fw-bolder fs-2">restaurant</span></div>
                <div class="col-8"><p>€ ${this.ticketPrice.toFixed(2)}</p></div>
            </div>
        </div>
        `;
        let card = super.display("Get Tickets");
        let insert = this.returnAsHTML(html, 'info-events');
        card.querySelector('.card-body').appendChild(insert);
        return card;
    }
}
