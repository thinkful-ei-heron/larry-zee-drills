/* eslint-disable no-console */
'use strict';

//object drills
//object initializers and methods
let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};
console.log(`float${loaf.flour}: ${loaf.water}`);
console.log(loaf.hydration());

//Iterating Over and Object's Properties
let myObj = {
  foo: 'goo',
  bar: 'car',
  fum: 'gum',
  quux: 'wuux',
  spam: 'ttam'
};

for (let x in myObj) {
  console.log(`Name is ${x}, Value is ${myObj[x]}.`);
}

//arrays in objects
let obj = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};
console.log(obj.meals[3]);

//Arrays of Objects Drill 2
let peopleJobs = [{'John Mays': 'plumber'},
  {'Derrick Eye': 'electrician'},
  {'Marvin Johnson': 'surveyor'},
  {'Colleen Jones': 'receptionist'},
  {'Maddie Marvin': 'owner'}];

peopleJobs.forEach(function(person) {
  console.log(`Name is ${Object.keys(person)[0]}, job title is\
 ${person[Object.keys(person)[0]]}.`);
});

//Properties that aren't there
peopleJobs = [{'John Mays': 'plumber'},
  {'Derrick Eye': 'electrician'},
  {'Marvin Johnson': 'surveyor'},
  {'Colleen Jones': 'receptionist'},
  {'Maddie Marvin': 'owner'}];

peopleJobs.forEach(function(person) {
  console.log(`Name is ${Object.keys(person)[0]}, job title is\
 ${person[Object.keys(person)[0]]}.`);
});


