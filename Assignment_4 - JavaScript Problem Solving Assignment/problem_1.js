function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let surcharge = fare * 0.20;
    let serviceCharge = 30;
    return fare + surcharge + serviceCharge;
}

let fareInput = 200;
// Sample Inputs:
// let fareInput = 150;
// let fareInput = 0;
// let fareInput = -50;
// let fareInput = "abc";
console.log("Problem-01 Output:", totalFine(fareInput))