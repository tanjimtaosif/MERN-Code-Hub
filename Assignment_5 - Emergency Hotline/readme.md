# JavaScript DOM & Events

## 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

- **`getElementById(id)`**: Returns **a single element** with the matching `id`. Fast and widely supported.
- **`getElementsByClassName(className)`**: Returns a **live HTMLCollection** of elements with that class.
- **`querySelector(selector)`**: Returns the **first element** matching a CSS selector.
- **`querySelectorAll(selector)`**: Returns a **static NodeList** of all matching elements.

**Summary**: Single element: `getElementById`, `querySelector`. Multiple: `getElementsByClassName` (live) vs `querySelectorAll` (static).

## 2. How to create and insert a new element into the DOM

```js
const newEl = document.createElement('div');  // create
newEl.textContent = 'Hello!';                 // set content
document.body.appendChild(newEl);             // insert into DOM
```

## 3. Event Bubbling

- **Definition**: Event starts at the target element and **bubbles up** through parent elements.
- **Example**: Clicking a button inside a div triggers both button and div listeners (inside → outside).

## 4. Event Delegation

- **Definition**: Attach a single listener to a **parent**, then detect which child triggered the event using `event.target`.
- **Benefits**:
  - Fewer listeners → cleaner code and better performance.
  - Works with **dynamic content** added later.

## 5. preventDefault() vs stopPropagation()

- **`preventDefault()`**: Stops the **default browser action** (e.g., link navigation, form submission).
- **`stopPropagation()`**: Stops **event bubbling** to parent elements.

**Example distinction**:
- `preventDefault()`: default action blocked, parent listeners still fire.
- `stopPropagation()`: parent listeners blocked, default action may still occur.


