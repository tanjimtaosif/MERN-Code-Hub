# JavaScript ES6

## 1) Difference between `var`, `let`, and `const`

-   **var** → Function-scoped, can be re-declared & updated.
-   **let** → Block-scoped, can be updated but not re-declared in the
    same scope.
-   **const** → Block-scoped, cannot be re-assigned (but objects/arrays
    can still be mutated).

``` js
var x = 10; 
let y = 20; 
const z = 30;
```

------------------------------------------------------------------------

## 2) Difference between `map()`, `forEach()`, and `filter()`

-   **forEach()** → Loops through array, performs action, **does not
    return** a new array.
-   **map()** → Loops & transforms items, **returns a new array** of
    same length.
-   **filter()** → Loops & **returns a new array** with only items that
    match the condition.

``` js
const numbers = [1, 2, 3, 4];

// forEach
numbers.forEach(n => console.log(n * 2)); // Just prints

// map
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// filter
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

------------------------------------------------------------------------

## 3) Arrow Functions in ES6

A shorter way to write functions using `=>`.\
They do **not** have their own `this`, they use the parent scope's
`this`.

``` js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
```

------------------------------------------------------------------------

## 4) Destructuring Assignment in ES6

A way to unpack values from arrays or objects into variables.

``` js
// Array destructuring
const [first, second] = [10, 20];
console.log(first, second); // 10 20

// Object destructuring
const person = { name: "Rahim", age: 23 };
const { name, age } = person;
console.log(name, age); // Rahim 23
```

------------------------------------------------------------------------

## 5) Template Literals in ES6

Use backticks (`` ` ``) to create strings that support interpolation and
multi-line.

``` js
const name = "Rahim";
const message = `Hello, ${name}! Welcome to ES6.`;
console.log(message);

// Multi-line string
const poem = `
Roses are red,
Violets are blue,
Template literals
Make life easy for you!
`;
console.log(poem);
```

**Difference from concatenation:**\
- More readable\
- Easier interpolation with `${}`\
- Supports multi-line without `\n`
