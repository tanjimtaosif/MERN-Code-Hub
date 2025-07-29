let mark = 74; // You can change this value to test different results
let grade;

if (mark >= 80 && mark <= 100) {
    grade = "A+";
}
else if (mark >= 70 && mark < 80) {
    grade = "A";
}
else if (mark >= 60 && mark < 70) {
    grade = "A-";
}
else if (mark >= 50 && mark < 60) {
    grade = "B";
}
else if (mark >= 40 && mark < 50) {
    grade = "C";
}
else if (mark >= 33 && mark < 40) {
    grade = "D";
}
else {
    grade = "You Are Fail !!!";
}

console.log(grade);
