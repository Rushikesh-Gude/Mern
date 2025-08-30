// //SWITCH CASE 
// // X === Condition
// /* */

// /* 
// LOOPS:

// Repetition , iteration , Conditions , increment/decrement,
// too much work to update "Hi to Hii"

// */

// /////////////////////*            WHILE LOOPS           *////////////////////////////////

// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");

// // Exercise print from 1 to 10

// let n = 1;
// while(n <= 10){
//     console.log(n);
//     n++;
// }

// // Print all the even number till 25 

// let x = 0;
// while (x < 26){
//     if(x % 2 == 0){
//     console.log(x);
//     }
//     x++;
// }

// // let x1 = 0;
// // while (x < 26){
// //     console.log(x1);
// //     x1++;
// // }

// //print countdown from 10 t0 1

// let num = 10;
// console.log("Numbers in Reverse Order")
// while (num > 0){
//     console.log(num);
//     num--;
// }


////////////////////////////////*===========  FOR LOOPS  ==========*///////////////////////////////////////

// print Hi 10 times

for (let i=0;i<10;i++){
    console.log("Hi")
}
// Time Complexity : O of 10



// print counting from 1 to 20//

for (let i=1;i<20;i++){
    console.log(i);
}
//Time Complexity : O(n) or O(4n)



// print multiples of 3 only upto 50//

console.log("Multiplied of 3:")
for (let i=3;i<50;i+=3){
    console.log(i);
}
//Time Complexity : O(n)


// Print the square of each number from 20 t0 35

let n = 35;
for (num=20; num<=n ; num++){
    console.log(num ** 2)
}
//TC : O(n)

console.log("=====================")
x = 15;
let start = 20;

for (let i = start; i <= start + n; i++){
    console.log(i*i);
}
//TC = O(n) = [(start + n) - start]

console.log("=====================")
//
n= 5;
for (let i=1;i<=10;i++){
    console.log(n,"* "+ i + " = " + n * i)
}

console.log("=====================")
// Print Sum of 100 Numbers
sum = 0;
for(i=1;i<=100;i++)
    sum = sum + i
    console.log("Sum of 100 Number is:",sum);

//TC = O(n)
console.log("=====================")


// Condition related extra things //
// Read about short circuiting in Js //

const n1 = false && 5;
const n2 = n1 === false && 34;
const n3 = n2 && 67;
const n4 = true && n2 == 34 && 45 && n1==false; // Home Work
const n5 = n1 == (false && n2 == 34) || (n3 == false &&n4 == true);
console.log({n1,n2,n3,n4});

// short circuiting says if one of the value is false in with && then the direct output is false with out checking the other value.
// example :
// A || B || C|| = FALSE 
// if A is true then the output will not be false//




 