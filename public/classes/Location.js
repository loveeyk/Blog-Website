//Using "_" because Location already exists as an interface in js
export class __Location {
    //Maybe save this in array in superclass and call with destructuring?..
    constructor(locationName, city, zipCode, street, imgUrl, desc) {
        this.locationName = locationName;
        this.city = city;
        this.zipCode = zipCode;
        this.street = street;
        this.adress = `${this.street}, ${this.zipCode}, ${this.city}`;
        this.imgUrl = imgUrl;
        this.desc = desc;
        this.parser = new DOMParser();
    }
    returnAsHTML(html, queryclass) {
        return this.parser.parseFromString(html, "text/html").querySelector(`.${queryclass}`);
    }
    //return as HTMLElement (parsed with DOMParser)
    display(btntext) {
        return this.returnAsHTML(`
          <div class="card-col col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                    <div class="card-body">
                      <img class="card-img-top" src="${this.imgUrl}">
                      <h5 class="card-title">${this.locationName} </h5>
                      <p class="card-text">${this.desc}</p>
                      <a href="#" class="btn btn-primary">${btntext ? btntext : "Insert Text"}</a>
                    </div>
                    <div class="card-footer">
                        <p>${this.adress}</P>
                    </div>
              </div>
          </div>
          `, "card-col");
    }
}
