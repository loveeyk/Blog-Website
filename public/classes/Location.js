//Using "_" because Location already exists as an interface in js
export class __Location {
    //Maybe save this in array in superclass and call with destructuring?..
    constructor(locationName, country, city, zipCode, street, imgUrl, desc, creationDate) {
        this.locationName = locationName;
        this.country = country;
        this.city = city;
        this.zipCode = zipCode;
        this.street = street;
        this.adress = `${this.street}, ${this.zipCode}, ${this.city}`;
        this.imgUrl = imgUrl;
        this.desc = desc;
        this.creationDate = creationDate;
        this.parser = new DOMParser();
    }
    getCreationDateString() {
        return this.creationDate.toLocaleDateString("de");
    }
    returnAsHTML(html, queryclass) {
        return this.parser.parseFromString(html, "text/html").querySelector(`.${queryclass}`);
    }
    //return as HTMLElement (parsed with DOMParser)
    display(btntext) {
        return this.returnAsHTML(`
          <div class="card-col col-lg-3 col-md-6 col-sm-12">
              <div class="card h-100 d-flex">
              <div class="card-header text-center fw-bold">${this.country}</div>
                    <div class="card-body d-flex flex-column">
                      <img class="card-img-top d-none d-sm-block" src="${this.imgUrl}">
                      <h5 class="card-title fs-4 p-2">${this.locationName} </h5>
                      <p class="card-text p-2">${this.desc}</p>
                      <a href="#" class="btn btn-dark mt-auto">${btntext ? btntext : "Insert Text"}</a>
                    </div>
                    <div class="card-footer">
                        <p>${this.adress}</p>
                        <p>Created: ${this.getCreationDateString()}
                    </div>
              </div>
          </div>
          `, "card-col");
    }
}
