import { Hotel } from './hotel';

export const HOTELS: Hotel[] = [
    {
        id:1,
        name:'Hotel München',
        stars:4,
        starImg:'assets/img/star.png',
        image:'assets/img/hotel1.jpg',
        category:'Spa, W-Lan, Parkplatz',
        price: 199,
        checked: true,
        breakfast: 20,
        singleroom: 25,
    },
    {
        id:2,
        name:'Hotel Hamburg',
        stars:5,
        starImg:'assets/img/star.png',
        image:'assets/img/hotel2.jpg',
        category:'Spa, W-Lan',
        price: 299,
        checked: false,
        breakfast: 50,
        singleroom: 35,
    },
];
