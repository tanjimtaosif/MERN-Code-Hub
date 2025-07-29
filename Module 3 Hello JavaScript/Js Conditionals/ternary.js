/**
 * Ternary --> Three Parts
 */

const age = 20;

// if (age >= 18){
//     console.log("Yu can vote");
// }
// else{
//     console.log("You Can not vote");
// }

// *condition ? do somthing when true : do something when false

age >= 18 ? console.log("Can Vote") : console.log("Van not vote");

let price = 500;
const isLeader = true;

if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}

console.log(price);

// Terenary mathode 
price = isLeader === true ? 0 : price + 100;

// Semi - Advance Ternary 

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 100;
}

// Terenary mathode 

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price = price + 100;