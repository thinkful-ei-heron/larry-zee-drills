/* eslint-disable no-console */
'use strict';


/*** Object Initializers and Methods ***/
let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (100 * this.water / this.flour);
  }
};

console.log(`Flour is ${loaf.flour} and water is ${loaf.water}`);
console.log(`The hydration is ${loaf.hydration()}`);


/*** Iterating over an Object's Properties ***/
let myObj = {
  foo: 'goo',
  bar: 'car',
  fum: 'gum',
  quux: 'uuux',
  spam: 'tpam'
};


for (let x in myObj) {
  console.log(` Property name is ${x} and property value is ${myObj[x]}`);
}


/*** Arrays in Objects ***/
let myObj2 = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(`The Hobbit's fourth meal of the day is ${myObj2.meals[3]}.`);


/*** Arrays of Objects ***/
let peopleJobs = [{name: 'John Mays', title: 'plumber'},
  {name: 'Derrick Eye', title: 'electrician'},
  {name: 'Marvin Johnson', title: 'surveyor'},
  {name: 'Colleen Jones', title: 'receptionist'},
  {name: 'Maddie Marvin', title: 'owner'}];

peopleJobs.forEach (function(person) {
  console.log(`${person.name} is a ${person.title}.`);
});


/*** Properties that aren't there. ***/
peopleJobs = [{name: 'John Mays', title: 'plumber', boss: 'Fred'},
  {name: 'Derrick Eye', title: 'electrician', boss: 'Fred'},
  {name: 'Marvin Johnson', title: 'surveyor', boss: 'Meghan'},
  {name: 'Colleen Jones', title: 'receptionist', boss: 'Marvin'},
  {name: 'Maddie Marvin', title: 'owner'}];

peopleJobs.forEach(function(person) {
  let message = '';
  if (person.boss === undefined) {
    message = 'doesn\'t report to anybody.';
  }
  else {
    message = `reports to ${person.boss}.`;
  }
  console.log(`${person.title} ${person.name} ${message}.`);
});


/*** Cracking the Code. ***/
function decode(encodedWord) {
  let cypher = {a: 1,
    b: 2,
    c: 3,
    d: 4};

  if (cypher[encodedWord.charAt(0)] === undefined) return ' ';
  else return encodedWord.charAt(cypher[encodedWord.charAt(0)]);
}

let message = 'craft block argon meter bells brown croon droop';
let splitMessage = message.split(' ');
let decodedMessage = '';
splitMessage.forEach(function (codeWord) {
  decodedMessage += decode(codeWord);
});

console.log(decodedMessage);


/*** Factory Functions with LOTR ***/
function createCharacter (newName, newRace, newOrigin, newWeapon, 
  newAttack, newDefense) {
  return {
    name: newName,
    race: newRace,
    origin: newOrigin,
    weapon: newWeapon,
    attack: newAttack,
    defense: newDefense,
    describe: function () {
      console.log (`${this.name} is a ${this.race} from ${this.origin}\
 who uses a ${this.weapon}`);
    },
    evaluateFight: function (character) {
      let theirDamage = 0;
      if (this.attack > character.defense) theirDamage = this.attack - character.defense;
      let myDamage = 0;
      if (this.attack < character.defense) myDamage = character.attack - this.defense;      
      console.log (`Your opponent takes ${theirDamage} damage and you receive ${myDamage} damage`);
    }
  };
}

let characters = [createCharacter('Gandalf', 'Wizard', 'Gardens of Lorien', 'Staff', 8, 3),
  createCharacter('Legolas', 'Elf', 'Mirkwood', 'Long Sword', 6, 5),
  createCharacter('Arwen Undomiel', 'Half-Elf', 'Rivendell', 'Wand', 3, 8),
  createCharacter('Bilbo Baggins', 'Hobbit', 'Shire', 'Ring', 3, 4)  
];

let myChar = characters.find(function(char) {
  return char.name === 'Legolas';
});
myChar.describe();

let sneakyHobbitses = characters.filter(function(char) {
  return char.race === 'Hobbit';
});

let attackOverFive = characters.filter(function(char) {
  return char.attack > 5;
});
