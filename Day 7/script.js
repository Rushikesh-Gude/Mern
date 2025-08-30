const dslr = 4 + "34" * " " / 5;
console.log(dslr);

const empty = " " * 1;
console.log(empty)


// let name1 = "Suresh";
// let name2 = "Ramesh";
// let mark1 = 40;
// let mark2 = 30;

// if (mark1 > mark2) {
//     console.log(name1,"has Scored Highest No =", mark1);
// } else {
//     console.log(name2,"has Scored Highest No =", mark2);
// }

let name1 = "Suresh";
let name2 = "Ramesh";
let mark1 = 40;
let mark2 = 30;

// let winnerName;
// let winnerMarks;

// if (mark1 > mark2) {
//     winnerName = name1;
//     winnerMarks = mark2;
// } else {
//    winnerName = name2;
//     winnerMarks = mark2; 
// }
// console.log(winnerName,"has the Highest score = ",winnerMarks)


let winnerName = name1;
let winnername = mark1;

if (mark2 <mark1) {
    winnerName = name2;
    winnerMarks = mark2;
}
console.log(winnerName,"has the Highest score = ",winnerMarks)


//*---------------Ternary Operator-----------------*//


//1111111111111
const num1 = 24;
num1 % 2 == 0 ? console.log(num1 +" is Even") : console.log(num1 + " is odd")

//2222222222222
const isEvenorOdd = num1 % 2 == 0 ? "Even" : "Odd";
console.log(num1 + " is " + isEvenorOdd);

//Check the number even or odd
num1 > 0 ? console.log(num1 +" is Postive") : console.log(num1 + " is Negative")

Age = 25;
Age <= 18 ? console.log("Ticket Price is Half:", Age) : console.log("Ticket Price is Full:",Age)

score1 = 45;
score2 = 50
const isHighorLow = score1 < score2? name1:name2;
const isHighScore = score1 > score2? score1:score2;
console.log(isHighorLow + " has scored the Highest score with score of",isHighScore);

// Print the greatest among 3 numbers

numb1 = 12;
numb2 = 14;
numb3 = 16;


// Highest numbers among numbers

//11111111111111111
let maxAmongThreeN = numb1;

if (numb2 >= numb1 && numb2>= numb3){
   maxAmongThreeN = numb2; 
} else if (numb1 >= numb3 && numb1 >= numb3) {
    maxAmongThreeN = numb1;
} else {
    maxAmongThreeNumb = numb3;
}
console.log("Highest Among Three Number is :",maxAmongThreeN)

//22222222222222222
const greatestnumb = numb1 > numb2 && numb1 > numb3 ? numb1 : numb2 > numb1 && numb2 > numb3 ? numb2 : numb3;
console.log(greatestnumb);

// Print MAX and Min of 3 numbers
const maxofnumb = Math.max(numb1,numb2,numb3);
const minofnumb = Math.min(numb1,numb2,numb3);
console.log("Maximum Number is :",maxofnumb);
console.log("Minimum Number is :",minofnumb);


// Switch Statements:
//Print 1-7 Weekdays


let day=1;
switch(day){
    case 1:
        console.log("Monday");
        // break;

    case 2:
        console.log("Tuesday");
        // break;
    
    case 3:
        console.log("Wednesday");
        // break;

    case 4:
        console.log("Thursday");
        // break;

    case 5:
        console.log("Friday");
        // break;

    case 6:
        console.log("Saturday");
        // break;

    case 7:
        console.log("Sunday");
        // break;
default:
    console.log("Invalid")
}

// MAKE A GRADING SYSTEM USING SWITCH STATEMENT


let score = 80

switch(true){
    case score >= 80:
        console.log("A");
        break;
     
    case score >= 60:
        console.log("B");
        break;

default:
    console.log(Error)
}
