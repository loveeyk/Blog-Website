import { __Event } from './classes/Event.js';
import { __Restaurant } from './classes/Restaurant.js';
import { __Place } from './classes/Place.js';
//Get HTMLElements
let places_cardwrapper = document.querySelector('#places-cardwrapper');
let restaurants_cardwrapper = document.querySelector('#restaurants-cardwrapper');
let events_cardwrapper = document.querySelector('#events-cardwrapper');
let sort_input = document.querySelector('#sort');
let isAsc = true;
//Define Arrays
let locations = []; //Array for Everything
let places = []; //..for Places
let restaurants = []; //..for Restaurants
let events = []; //..for Events
//Instantiate all Objects
places = [new __Place("Schloss Schönbrunn", "Austria", "Vienna", "1130", "Schönbrunnerstr. 157", "../img/vienna.jpeg", "The 1,441-room Rococo palace is one of the most important architectural, cultural, and historic monuments in the country. The history of the palace and its vast gardens spans over 300 years, reflecting the changing tastes, interests, and aspirations of successive Habsburg monarchs. It has been a major tourist attraction since the mid-1950s.", new Date("2020-11-15")),
    new __Place("Taj Mahal", "India", "Agra - Dharmapuri", "282001", "Tajganj", "../img/tajmahal.jpeg", "The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year. The imperial court documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrates the love story held as the inspiration for the Taj Mahal.", new Date("2020-11-18")),
    new __Place("Piazza San Marco", "Italy", "Venice", "30124", "St. Mark's Square", "../img/venice.jpeg", "Venice is an enchanting city that casts visitors under an intoxicating spell. It’s dreamy and romantic, with an undercurrent of mystery and drama. And while Carnival is only once a year, its mood is present year-round. The Grand Canal is the center of activity, with gondoliers singing to the passengers in their boats.", new Date("2019-10-15")),
    new __Place("Chinatown", "China", "Peking", "4321", "Chinatownstreet", "../img/china.jpeg", "Beijing, alternatively romanized as Peking, is the capital of the People's Republic of China. It is the world's most populous national capital city, with over 21 million residents within an administrative area of 16,410.5 km²", new Date("2021-02-05"))
];
restaurants = [new __Restaurant("Figlmüller", "Austria", "Vienna", "1010", "Wollzeile 5", "../img/figlmüller.jpeg", "Das Stammhaus in der Wollzeile wird oft als die „Heimat des Schnitzels“ bezeichnet. Seit 1905 bietet das Lokal den Gästen Wiener Le­bens­art, reduziert auf das Wesentliche, sowie ein au­ßer­gewöhn­liches Schnitzel.", "+4315126177", "Austrian Cuisine", "http://www.figlmueller.at", new Date("2020-08-12")),
    new __Restaurant("Pizzeria All'Anfora", "Italy", "Venice", "1220", "Calle Larga dei Bari, 1223", "../img/pizzeria.png", "Trattoria-Pizzeria All'Anfora - one the most comfortable pizzerias in whole Venice. They serve delicious food for a reasonable price - pasta, pizza and everything your heart strives for.", "+39 041 524 0325", "Italian Food", "http://www.pizzeriaallanfora.com", new Date("2020-04-08")),
    new __Restaurant("Tea'se Me", "India", "Agra", "282001", "Fatehabad Road 120", "../img/indianrestaurant.jpeg", "Tea'se Me is an indian restaurant in the heart of Agra. They serve authentic delicious indian food with a twist in an breathtaking ambiance.", "+9138402938", "Indian Food", "http://www.teaseme.com", new Date("2020-05-16")),
    new __Restaurant("Restaurant Furongji", "China", "Bejing", "380498", "Gouzhung Ji Hua", "../img/peking_rest.jpeg", "This restaurant serves excellent authentic chinese cuisine. The athmosphere is astonishing and the staff is very welcoming and nice. Defenitely worth a visit!", "+8634729833", "Chinese Food", "http://www.theorchidbeijing.com/", new Date("2020-07-07"))
];
events = [new __Event("Lunar New Year", "China", "Beijing", "64372", "Beijingstreet", "../img/newyr.webp", "Chinese New Year 2021 falls on Friday, February 12, 2021, beginning a year of the Ox. China's public holiday will be February 11–17, 2021.", new Date("2021-02-12"), 69.90, new Date("2020-10-12")),
    new __Event("Vienna Film Festival", "Austria", "Vienna", "1010", "Vienna City Hall", "../img/filmfestival.jpeg", "One of the summer highlights and an absolut must for friends of operas is the Film Festival in front of the Vienna City Hall. Each night a different film connected to operas is presented on the collosal screen. There is no entrance fee and a collection of different international cuisines is pampering your stomach.", new Date(), 0.00, new Date("2021-01-18")),
    new __Event("Carnevale", "Italy", "Viareggio", "40954", "Pilaggio Viareggio", "../img/carneval.jpeg", "Venice has one of the top carnival festivals in the world, but Carnevale is celebrated in many Italian towns. Viareggio, on the coast of Tuscany, is known for its elaborate floats, and parades are held on several weekends. Carnevale events often occur prior to the actual Carnival date, too. Carnevale usually falls in February.", new Date(), 49.99, new Date("2021-02-01")),
    new __Event("Onam Festival", "India", "Kerala", "AD3838", "Kerala Colony", "../img/onam.webp", "The Onam Festival is the most significant harvest festival in Kerala, celebrating Nature’s reward after a whole year of hard work and attracting thousands of local and international tourists. For cultural buffs, this is the best time to travel through this Indian state and sample the diversity of its culture and its colourful traditions.", new Date(), 5.90, new Date("2021-03-01"))
];
//Combine all three arrays = Array of Superclass Type Location
locations = [...places, ...restaurants, ...events];
//Event listener on input change
sort_input.addEventListener('change', (e) => {
    isAsc = (sort_input.value === 'desc') ? false : true;
    console.log(isAsc);
    renderCards(locations);
});
//Deletes all Cards and displays them again
let renderCards = (locationarray) => {
    deleteCards();
    //sorts according to isAsc boolean
    let sortedArray = locationarray.sort((a, b) => isAsc ? (a.creationDate - b.creationDate) : (b.creationDate - a.creationDate));
    //iterate all locatin objects
    sortedArray.forEach(location => {
        //check which class name and append in according wrapper
        switch (location.constructor.name) {
            case '__Place':
                places_cardwrapper.appendChild(location.display());
                break;
            case '__Restaurant':
                restaurants_cardwrapper.appendChild(location.display());
                break;
            case '__Event':
                events_cardwrapper.appendChild(location.display());
                break;
            default:
                console.log("not working");
        }
    });
};
let deleteCards = () => {
    places_cardwrapper.innerHTML = "";
    restaurants_cardwrapper.innerHTML = "";
    events_cardwrapper.innerHTML = "";
};
let init = () => {
    isAsc = true;
    renderCards(locations);
};
init();
