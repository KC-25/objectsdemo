
'use strict'

// console.log('Hello World');
document.write('<h1>Objects Demo</h1>');

// const spaceship ={
//     engine:'rocket',
//     color: 'green',
//     room:'cockpit',
//     flying: function(){
//         return("My spaceship is powered by a " +this.engine+ " therfor it can fly!!!");
//     }
// };
// console.log(spaceship);

// document.write('<h2>' ,spaceship.flying, '</h2>');
// document.write('<h2>' ,spaceship.flying(), '</h2>');

// document.write('<h2> I have a spaceship it is ', spaceship.color, ' my spaceship also has a ', spaceship.room,'. ' ,spaceship.flying(), '</h2>');

// console.log(spaceship.color);
// document.write('<h2>',spaceship.flying(),'</h2>');

// ******************Day Two***************************

function Car (make, model, color, year){
    this.make = make;
    this.modle = model;
    this.color = color;
    this.year = year;
}

const myCar = new Car ("Ford", "F150", "Blue", "2016");
const sammyCar = new Car ("Dodge", "Ram 1500", "White", "2017");
const kierraCar = new Car ("Toyota", "Highlander", "Black", "2020");

console.log(myCar);
console.log(sammyCar);
console.log(kierraCar);

function Icecream(name, flavor, dish, size){
    this.name = name;
    this.flavor = flavor;
    this.dish = dish;
    this.size = size;
}

Icecream.prototype.topping = 'sprinkles';
Icecream.prototype.string = function(){
    return ("My name is " + this.name + " I like " + this.flavor + " icecream " + " my prefrance would be to have it in  a " + this.dish + " and have it be " + this.size + ".");
}

const mrmummsIcecream = new Icecream('Mr. Mumm', 'caramel', 'bowl', 'large');
const joshIcecream = new Icecream('Josh', 'cookiedough', 'blizzard', 'large');
const cainIcecream = new Icecream('Cain', 'Reeces', 'blizzard', 'mini');
const jrIcecream = new Icecream('Jr', 'vanilla', 'cone', 'large',);

console.log(mrmummsIcecream);
console.log(joshIcecream);
console.log(cainIcecream);
console.log(jrIcecream, Icecream.prototype);
document.write('<h2>', jrIcecream.string(),'</h2>');