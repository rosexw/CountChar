//iteration project/ iterables
//This is nothing - it's just readings on how to iterate in different ways,
// like for (var i = 0; i < array.length; i++)
// or for (var i in object)
// or for (var i of array)
// or for (let i in object)
// or for (let i of array)
//
// Studying with Andrew:
// for in should only be used for objects, not arrays
// for of is for arrays and strings
// let is inside the block scope
// var is functional/global scope

var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};



for (var i = 0; i < 10; i++) {
  // iterating over an array
  console.log(someArray[i]);
}

// for (var planet in planetMoons) {
//   // additional filter for object properties:
//   if (planetMoons.hasOwnProperty(planet)) {
//     //  ...
//
//   }
// }

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
// planetMoons[planet] gives the value of each moon, 0, 0, 1 etc
