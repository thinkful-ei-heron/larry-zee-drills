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

//
