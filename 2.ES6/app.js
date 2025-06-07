/*
    Arrow function 
    Arrow function không hỗ trợ cho contructor
    Arrow function không hỗ trợ cho context trong object -> undefined
*/

// arrow function 2 đối số
const sum = (a, b) => a + b;

// arrow function 1 đối số
const logger = log => console.log(log);

// arrow function dành cho object
const sum2 = (a, b) => ({ a: a, b: b });


/* 
    Enhanced object literals
    1. Định nghĩa key: value cho object
    2. Định nghĩa method cho object
    3. Định nghĩa key cho object dưới dạng biến
*/
var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return name;
    }
};

// Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';

const course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 2000
};

/* Destructuring, Rest */

// array
var array = ['JS', 'PHP', 'Ruby'];

const [a, b, c] = array; // a = JS, b = PHP, c = Ruby

// rest cho Destructuring
const [first, ...rest] = array; // first = JS, rest = ['PHP', 'Ruby']

// object
var course = {
    name: 'Javascript',
    price: 2000
};

const { name, price } = course;

/* Spread operator */
var array1 = ["PHP", "JS"];
var array2 = ["HTML", "CSS"];
var array3 = [...array1, ...array2]; // array3 = ["PHP", "JS", "HTML", "CSS"]

var obj1 = { name: "JS" };
var obj2 = { price: 2000 };
var obj3 = { ...obj1, ...obj2 }; // obj3 = {name: "JS", price: 2000}

var array = ["HTML", "CSS", "JS"];
function logger(...rest) { // định nghĩa tham số rest
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array); // truyền đối số Spread