// print a discount percentage for the club member

let cartbag = 800;
let Ismember = true;

let discount = (cartbag > 500) ? (Ismember ? 30 : 20) : (cartbag > 1500) ? (Ismember ? 50 : 30) : 0;
console.log("Discount = " + discount + " % ")

console.log("Discount: " + ((cartbag > 1000) ?  (Ismember ? 30 : 20) : (cartbag > 500) ? (Ismember ? 20 : 10) : 0) + " %");