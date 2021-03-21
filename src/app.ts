import {__Location} from './classes/Location.js'
import {__Event} from './classes/Event.js'
import {__Restaurant} from './classes/Restaurant.js'
import {__Place} from './classes/Place.js'

let places_cardwrapper = document.querySelector('#places-cardwrapper')! as HTMLElement
let restaurants_cardwrapper = document.querySelector('#restaurants-cardwrapper')! as HTMLElement
let events_carouselwrapper = document.querySelector('#carousel-wrapper')! as HTMLElement

//Definde Arrays

let locations:Array<__Location> = []; //Array for Everything
let places:Array<__Place>= [] //..for Places
let restaurants:Array<__Restaurant>= [] //..for Restaurants
let events:Array<__Event>= [] //..for Events

places = [new __Place("Stephansplatz","Vienna","1010","Stephansplatz 1","../img/vienna.jpeg","This is a beautiful place"),
new __Place("Stephansplatz","Vienna","1010","Stephansplatz 1","../img/turkey.jpeg","This is a beautiful place"),
new __Place("Stephansplatz","Vienna","1010","Stephansplatz 1","../img/venice.jpeg","This is a beautiful place"),
new __Place("Stephansplatz","Vienna","1010","Stephansplatz 1","../img/china.jpeg","This is a beautiful place")
];

restaurants = [new __Restaurant("Gasthaus Hansi","Vienna","1220","Hansistreet","../img/turkey.jpeg","Restaurant Hansi serves excellent food","+436608224253","Austrian Food","http://www.hansi.at"),
new __Restaurant("Gasthaus Hansi","Vienna","1220","Hansistreet","../img/turkey.jpeg","Restaurant Hansi serves excellent food","+436608224253","Austrian Food","http://www.hansi.at"),
new __Restaurant("Gasthaus Hansi","Vienna","1220","Hansistreet","../img/turkey.jpeg","Restaurant Hansi serves excellent food","+436608224253","Austrian Food","http://www.hansi.at"),
new __Restaurant("Gasthaus Hansi","Vienna","1220","Hansistreet","../img/turkey.jpeg","Restaurant Hansi serves excellent food","+436608224253","Austrian Food","http://www.hansi.at")
];

events = [new __Event("test","test","tet","","../img/turkey.jpeg","tet",new Date(),12,true),
new __Event("test","test","tet","","../img/vienna.jpeg","tet",new Date(),12),
new __Event("test","test","tet","","../img/venice.jpeg","tet",new Date(),12),
new __Event("test","test","tet","","../img/venice.jpeg","tet",new Date(),12)
];

locations = [...places,...restaurants,...events]
locations.forEach(location => {
    
    switch(location.constructor.name){
        case '__Place': places_cardwrapper.appendChild(location.display())
        break;
        case '__Restaurant': restaurants_cardwrapper.appendChild(location.display())
        break;
        case '__Event': events_carouselwrapper.appendChild(location.display())
        break;
        default: 
        console.log("not working")
    }
})



