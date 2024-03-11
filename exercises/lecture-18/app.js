// 

console.log(typeof(function(){}));

let message = hello('World'); // hoisting
console.log(message); 

// let test = "I`m test"; // error
// var test = "I`m test"; // hoisting

function hello(name, test, me="me") {

    let msg =  name ? null : "Enter names value";
    if (msg) console.log(msg);
    // body function
    // local scope
    // console.log("Hello " + name + " and " + me); // undefined
    // return "Bla bla bla"; 
    // if (test === undefined) {
    //     test =  "Bla bla bla"; 
    // }
    // test = test || "I`m test"; 
    test = test ?? "I`m test"; 
    // return "Hello " + name + " and " + me + " " + test;
    return "Hello " + name + " and " + me + " " + test;
}

// let message = hello('World');
// console.log(message); 
hello();
message = hello('World', "Cats");
console.log(message);

console.log(hello('World')); // undefined



function calc(o, x, y) {
    switch (o) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        default: return;
    }
}

let res = calc('.', 555, 555);
console.log(res);
// hi(); // app.js:50 Uncaught ReferenceError: Cannot access 'hi' before initialization
let hi = function(msg = "Hello function") {
    console.log(msg);
}

hi(); // function

hi("Hello dogs");

// callback
function greeting(name) {
    console.log("Hello " + name);
}

function hell(cb) {
    const name = prompt('Enter Your name: ');
    cb(name);
}

// hell(greeting);


const hiYou = name => "Hello " + name;
console.log(hiYou('Cat'));

const meToo = () => console.log("Hello me");
meToo();

const plus = (x, y) => console.log(x + y);
plus(55, 77);


(function(msg) {
    console.log(msg);
})("Hello IIFE");

function greet(msg, name) {
    console.log(msg + name);
}

greet("Hello ", 'Tom');

greet("Hi ", 'Tom');
greet("Hello ", 'There');


function open() {
    console.log("It's open");
}
function close() {
    console.log("It's close");
}

let sign = true;
sign ? open() : close();

function recursive(n) {
    if (n === 0) {
        console.log("Task completed!");
        return;
    } 
    console.log("Task doing something!");
    recursive(n - 1);
}

recursive(5);