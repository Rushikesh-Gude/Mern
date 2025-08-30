// console.log(c23);
// let c23 = 10;

let a = 4;
console.log(a);


/* Precedence and Associativity with Examples */

let c = 3 * 4 + 30 / 6 * 5 ** 2;
console.log(c);

let d = 3 + 3 ** 4 / 3 ** 2 - 3 * 4 / 6;
console.log(d);

const y = ("123" + 1) * 2 ** 2 - 21 / 7;
console.log(y)

const z = "123" + 5 ** 5 / 25 ** 2 / 5;
console.log(z);

/* Conditions */ 
console.log("***********CONDITIONS************")

// did the code to check if the number is even or odd//




let num = 4;

if (num % 2 == 0) {
    console.log("Even")
} else {
    console.log("odd")
}
console.log("-----------------------------------------")

let numb = 8;

if ((numb/2)%2 == 0){
    console.log("Even")
} else {
    console.log("odd")
}

console.log("-----------------------------------------")

let r = "12";
const b = 12;
let e = "12";

if ( r == b) {
    console.log("Both r and b has same values")
}
if (b == e) {
    console.log("Both b and e has same values and datatypes");
}

console.log("-----------------------------------------")


let score = 75;

if (score >= 80){
    console.log("A");
} else if (score >= 60){
    console.log("B");
} else if (score <= 40){
    console.log("C");
} else {
    console.log("fail");
}

console.log("---------------------------------------")

let age = 23;
let gender =  "Male";

if (age >= 18 && gender == "Male") {
    console.log("Mature Boy")
} else if (age >= 18 && gender == "female") {
    console.log("Mature Girl")
}

console.log("---------------------------------------")

let ticket = 11;

if (ticket == 11 || ticket == 101) {
    console.log("The ticket No = ", ticket ," is winner")
} else {
    console.log("The ticket No = Loser")
}

console.log("---------------------------------------")

let loggedIn = true;
let hasSubcription = false;

if(loggedIn == hasSubcription) {
    console.log("Premium User giving Access to the Premium Content")
} else {
    console.log("Upgrade Your Subcription")
}

console.log("---------------------------------------")

let number = 17;

if (number !== 17) {
    console.log("Good Number")
} else {
    console.log("Bad Number")
}

console.log("---------------------------------------")

let numbers = 253;
let numbe = Math.floor(numbers / 100)
let third_digit = Math.floor(numbe % 10)

if (numbers == third_digit){
    console.log("It is a palindrome")
}else {
    console.log("it is not a palindriome")
}

console.log("---------------------------------------")

let ankh = 12.5;
if(Math.ceil(ankh) == ankh){
  console.log("Integer");
}else{
    console.log("Decimal");
}

console.log("---------------------------------------")

//#  HOMEWORK #//
let w = 10;
let t = 12;

if (w > t){
    c = w
    console.log(c);
} else {
    c = t
    console.log(c);
}







