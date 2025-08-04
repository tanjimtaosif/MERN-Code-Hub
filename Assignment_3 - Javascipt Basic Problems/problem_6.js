/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

// write your code here
var currentSalary = startingSalary * Math.pow(1.05, experience);
console.log(currentSalary.toFixed(2));
