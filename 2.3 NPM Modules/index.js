// var generateName = require('sillyname');


import generateName from "sillyname";
var sillyName = generateName();

import superheroes from "superheroes";
var random = Math.floor(Math.random() * superheroes.length);

console.log(`My name is ${sillyName}`);
console.log(`BEHOLD, I am ${superheroes[random]}!`);