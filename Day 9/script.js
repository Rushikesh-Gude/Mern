// // Factorial of a no.

// const n=5;
// factorial = 1;
// for (let i = 1;i<=n;i++){
//     factorial = (factorial * i);
// }
// console.log({factorial})

// // write a program to check if a no is prime or not

// let num = 19;
// let count = 0;

// for(i=1;i<=num;i++){
//     if(num % i ==0){
//         count++;
//     }
// }

// const message = (count > 2) ? "Not a prime Number" : " Prime Number ";
// console.log(message);

// if (count < 2){
//     console.log("Prime Number");
// }else {

//     console.log("Not a prime Number")
// }

// // greatest common division

// //////////////////////

// const divisior = 17;
// for (let i = 100; i <= 200; i++){
//     if(i % 17 == 0){
//         break;
//     }
//     console.log(i);
// }

// ///


// for (let i = 1; i <= 20; i++){
//     if(i % 17 == 0){
//         continue;
//     }
//     console.log("The Square of " + i ,"is ", i * i);
    
// }

// // print all the odd numbers from 1 to 100 that are divisible 

// let r = 100;
// for (let i = 1;i<=200;i++){
//     if(i % 2 == 0 || i % 5 != 0){
//         continue;
//     } 
//     console.log(i);
// }

// // Print first 10 odd numbers from 1 to 200 that are divisible by 5 --- use ?

// count = 0;
// for (let i = 1;i<=200;i++){
//     if(i % 2 == 0 || i % 5 != 0){
//         continue;
//         if (count == 10);
//         count++;
//         console.log(i);
// } 

// }


// N= 10;
// // write a program to print 10
// let starstring = "";
// for(let i = 0; i < N; i++){
//     starstring += "*";
// }
// console.log(starstring);

// write a program to print 10 lines in ( 10 '*' in one line)
// for (let i = 0 ; i < N; i++){

//     for(let j = 0; i < N; j++){
//     starstring += "*";   
// }
// }
// console.log(starstring);

//print below pattern 
// R = 6;
// T = 6;

// for (let i = 1; i <= T; i++) {
//     let starstring = "";   // reset string for each row
//     for (let j = 1; j <= R; j++) {
//         starstring += j + " ";
//     }
//     console.log(starstring);
// }



do {
    console.log("Hi, I'm do while loop !!");
} while (false);

let r
let responseCounter = 0;
do {
    const response = prompt("Do you want to continue ? " + responseCounter);
    console.log({response});
    responseCounter++;
}

