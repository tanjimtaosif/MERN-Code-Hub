const age = 17;
const price = 500;

if (age <= 12) {
    console.log('You can eat fir free');
}

else if (age >= 60) {
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 50) {
    const discount = price * 2 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}