/* eslint-disable no-console */
'use strict';
//iterating through objects drills
//Make student reports drill
function makeStudentsReport(data) {
  let results = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    results.push(`${item.name}: ${item.grade}`);
  }
  return results;
}

//enroll in summer school drill
function enrollInSummerSchool(students) {
  let results = [];
  for (let i = 0; i < students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course
    });
  }
  return results;
}

//Find by id drill
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  let returnItem = null;
  
  items.forEach(item => {
    if (item.id === idNum) {
      returnItem = item;
    }
  });

  return returnItem;
}

console.log(findById(scratchData, 28));

//Validate Object Keys
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  let result = true;
  let i = 0;
  Object.keys(object).forEach(function(key) {
    if (key !== expectedKeys[i]) result = false;
    i++;
  });

  return result;
}

console.log(validateKeys(objectB, expectedKeys));
