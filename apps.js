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
let peopleJobs = [
  { 'John Mays': 'plumber' },
  { 'Derrick Eye': 'electrician' },
  { 'Marvin Johnson': 'surveyor' },
  { 'Colleen Jones': 'receptionist' },
  { 'Maddie Marvin': 'owner' }
];

peopleJobs.forEach(function(person) {
  console.log(`Name is ${Object.keys(person)[0]}, job title is\
 ${person[Object.keys(person)[0]]}.`);
});

//Properties that arent there drill
let myPeeps = [
  { name: 'Maddie Marvin', job: 'owner' },
  { name: 'John Mays', job: 'plumber', boss: 'Maddie' },
  { name: 'Derrick Eye', job: 'electrician', boss: 'Maddie' },
  { name: 'Marvin Johnson', job: 'surveyor', boss: 'Maddie' },
  { name: 'Colleen Jones', job: 'receptionist', boss: 'Maddie' }
];

for (let i = 0; i < myPeeps.length; i++) {
  if (myPeeps[i].boss === undefined) {
    console.log(
      `${myPeeps[i].job} ${myPeeps[0].name} doesn't report to anybody.`
    );
  } else {
    console.log(
      `${myPeeps[i].job} ${myPeeps[i].name} reports to ${myPeeps[i].boss}`
    );
  }
}
// let results = peopleJobs.forEach(function() {
//if (peopleJobs[i].boss === undefined ? console.log(`${obj.peopleJobs[i].job`} ${obj.peopleJobs[i].name}
//t report to anybody.']) : console.log(`${obj.peopleJobs[i].job} ${obj[peopleJobs[i].name]} reports to ${obj.peopleJobs[i].boss}`)

/*peopleJobs.forEach(function(person) {
  let owner;
  console.log ( `"${person[Object.keys(person)[0]]} ? 
  ${owner} = ${person[Object.keys(person)[1]]} : 
  ${owner} = ${person[Object.keys(person)[4]]} `);
}*/

/*for (let i = 0; i < peopleJobs.length; i++) {
  //console.log(Object.values(objArr[i]));
  if (peopleJobs[i].boss === undefined) {
    console.log(
      `${peopleJobs[i].jobTitle} ${objArr[i].name} doesn't report to anybody. `
    );
  } else {
    console.log(
      `${objArr[i].jobTitle} ${objArr[i].name} reports to ${objArr[i].boss}.`
    );
  }
  //console.log(`${objArr[i].jobTitle} ${objArr[i].name} reports to ${objArr[i].boss}.`);
}
//);*/
//console.log(`Name is ${Object.keys(person)[0]}, job title is\
//${person[Object.keys(person)[0]]}.`);
//});

//(!`"${person[Object.keys(person)[0]]} ${Object.keys(person)[0]} reports to ${
// person[Object.keys(person)[1]]
