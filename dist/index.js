"use strict";
// Tipos básicos:
let age = 5;
const fisrtName = 'Herminio';
const isValid = true;
let idk = 'Qualquer coisa';
idk = 5;
idk = false;
idk = 'Anything';
const IDs = [1, 2, 3, 4, 5];
const booleans = [true, false, false, true];
const names = ['Herminio', 'Neto'];
// Tupla:
const person = [22, 'Herminio'];
// Lista de tuplas:
const persons = [
    [22, 'Herminio'],
    [19, 'Apoena']
];
// Intersections:
const productId = 42;
// Enum:
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
