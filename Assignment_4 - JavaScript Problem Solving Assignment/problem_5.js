function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let total = 0;
    let passCount = 0;
    let failCount = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    let avg = Math.round(total / marks.length);
    return { finalScore: avg, pass: passCount, fail: failCount };
}

let marksInput = []; 
// Sample Inputs:
// let marksInput = [40, 50, 60];
// let marksInput = [39, 30, 20];
// let marksInput = [];
// let marksInput = [100, 95, 80, 70];
console.log("Problem-05 Output:", resultReport(marksInput));