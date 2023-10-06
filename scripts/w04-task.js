/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nathanael Budge",
    photo: "images/WIN_20230601_14_52_02_Pro.jpg",
    favoriteFoods: ['Strawberries', 'Lasagna', 'Pineapple', 'Peaches'],
    hobbies: ['FFXIV', 'Piano', 'Writing', 'Singing'],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Utah',
        length: '10 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Idaho',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Arizona',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Texas',
        length: '4 years'
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

let imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(object => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    let place = object.place;
    let length = object.length;
    dt.textContent = place;
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});