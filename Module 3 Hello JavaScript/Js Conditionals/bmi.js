let bmi = 27.5; // You can change this value to test different results
let category;

if (bmi < 18.5) {
    category = "Underweight";
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
}
else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
}
else if (bmi >= 30) {
    category = "Obese";
}
else {
    category = "Invalid BMI";
}

console.log(category);
