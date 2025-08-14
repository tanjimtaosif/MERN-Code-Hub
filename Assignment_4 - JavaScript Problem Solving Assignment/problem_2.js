function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let cleaned = str.replace(/\s+/g, "");
    return cleaned.toUpperCase();
}

let stringInput = "  h e llo wor   ld";
// Sample Inputs:
// let stringInput = "a b c d";
// let stringInput = "  javascript  ";
// let stringInput = "";
// let stringInput = 12345;
console.log("Problem-02 Output:", onlyCharacter(stringInput));
