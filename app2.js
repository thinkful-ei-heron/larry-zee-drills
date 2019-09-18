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

//find by id drill
