




### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Ans:**

- `getElementById` : It finds and returns just one element by its unique ID. 

- `getElementsByClassName`: It finds and returns a live collection of all elements that have a specific class name. It works only with class names .

- `querySelector`: It finds and returns the first element that matches any CSS selector you give it (like ID, class, tag, or attribute). It returns a single element.

- `querySelectorAll`: It finds and returns all elements that match a CSS selector. It  gives a NodeList .


### 2. How do you create and insert a new element into the DOM?

**Ans:**

1. Create a paragraph element with `document.createElement("p")`.
2. Create a text node with `document.createTextNode("This is new")`.
3. Append the text node to the paragraph.
4. Find the parent element with `getElementById` or `querySelector`.
5. Append the paragraph to the parent with `appendChild`.


### 3. What is Event Bubbling and how does it work?

**Ans:**

**Event Bubbling** is a mechanism in the DOM where an event that happens on a child element first triggers on that element and then "bubbles up" to its parent elements.


**how dose it work:**

When we click on a button inside a `div` and a `body` element, the click event will first happen on the `button` then on the `div` and finally on the `body`.

<br/>

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Ans:**

**Event Delegation** in JavaScript is a technique where a single event listener is added to a parent element instead of adding separate event listeners to multiple child elements.


**Why it is useful:**

It improves performance by reducing the number of event listeners attached, which saves memory and speeds up the page.
It simplifies code by managing event handling in one place instead of multiple handlers.

<br/>

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

**Ans:**

The difference between `preventDefault()` and `stopPropagation()` methods in JavaScript is:

1. `preventDefault()` cancels the default action of the event (like navigation or form submission).
2. `stopPropagation()` stops the event from reaching parent elements and triggering their event listeners.

