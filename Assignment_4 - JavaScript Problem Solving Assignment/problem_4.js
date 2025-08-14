function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let array1 = [1, 2, 3]; 
let array2 = [1, 2, 3]; 
// Sample Inputs:
// let array1 = [1, 2, 3, 4];
// let array2 = [1, 2, 3];
// let array1 = ["a", "b"];
// let array2 = ["a", "b"];
// let array1 = [];
// let array2 = [];
console.log("Problem-04 Output:", isSame(array1, array2));