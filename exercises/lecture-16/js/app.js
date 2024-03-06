// 
"use strict";

var y = 3.14e10; // 3.14E10
let c; // undefined
let c1 = null;
let b1 = true; // false
console.log(typeof(c));
console.log(typeof(c1)); // object
console.log(typeof(b1));
let a = 2;
let b = 2;
const X = "HELLO"; // "" '' ``
console.log(typeof(X));
// + - * / % **

{
let a = 3;
let y = 3;
--y;
y--; // 0
++a;
let c = (a + b) / y;
console.log(c); 
}
b = 555;
// X = 3.14;
c = a + b;
console.log(c); // undefined

console.log(0.1 + 0.3);

console.log(0.1 + 0.2);

// let z = +"33.33" + +" 0.2";

let z = parseFloat("33.33") + +" 0.2";
console.log(z);

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt + 12n);
// alert(c);