# Animal Fun Facts

In this project, we’ll build a program that allows users to click an animal on the screen in order to have a fun fact pop up.

Our program will display a selection of animals on the screen. We’ll be allowed to decide if we want to include a background or not. Clicking an animal will cause a fact to be randomly selected from a list of potential options. The selected fact will pop up on the screen. As we keep clicking, we’ll be able to see different facts.

## Instructions

### Add a title

1. On line 1 in App.jsx, you should see an import statement. This is importing the animals object from animals.js.

2. Open main.jsx to find out how the `root` object is created and what the `render` method is rendering in the screen.

3. In App.jsx, inside the `App` function add a `title` constant that will hold the value of the title. For now, set its value to an empty string.\
In addition, create an `animalFacts` constant to hold the JSX expression that we’ll want to be compiled. Set its value to a `<h1>` element that contains our title.

4. We could fill in the empty string assigned to `title` if we wanted, but we could also leave it blank and let the JSX use a default value instead.\
Using the ternary operator, let the `<h1>` heading use ‘Click an animal for a fun fact’ as the default if `title` is an empty string.

5. It’s time to render the title. Let’s remove the empty `<div>` and return `animalFacts` from the `App` function, since that is the JSX expression that we want to be compiled and rendered.

### Add a background

6. Somewhere above where `animalFacts` is defined, create a constant named `background`. Set its value to a `<img />` element.\
Now let’s give it some attributes:
- Give it a class of `'background'`
- Let’s use `'ocean'` for `alt`.
- Finally, use `ocean` as the value of `src`. Make sure you import the image similarly as we are doing in `animals.js`.

7. Let’s reformat the JSX expression stored in `animalFacts` to include the `background` variable.\
Wrap the current `<h1>` element and our new `background` variable inside of `<div></div>` tags. Since the expression is going to be multiple lines, wrap it in parentheses.

### Add an array of images

8. Use a `for...in` loop to iterate over the animals object that we’re importing on line 1. Before the `animalFacts` definition, define an `images` array. For each animal, add a new `<img />` to that array.\
Assuming `animal` is the placeholder variable in your `for...in` loop, each image should have the following attributes:
- `key`: `{animal}`
- `className`: `'animal'`
- `alt`: `{animal}`
- `src`: `{animals[animal].image}`
- `aria-label`: `{animal}`
- `role`: `'button'`

9. Now that we have our array of images, let’s inject it into the JSX expression.\
Within the `animalFacts` JSX, underneath `{background}`, create a `<div>`. Give it a `className` attribute and set it equal to `'animals'`. Nest the array of images inside of this element.

### Adding fun facts

10. Now that we have our animals displaying on the screen, we’re ready to add an event listener! But first, let’s write a function to handle this event.
- Create a function `displayFact()` that takes one parameter `e`, the event. We want this function to pick a random fun fact based on the selected animal.
- Inside of the function, use `e.target.alt` to get the name of the animal being clicked.
- Generate a random index and use it to access an element in the animal’s .facts array.
- Save the fun fact in a variable.

11. We need a place to display our facts. Create an empty `<p>` element in `animalFacts` and give it an `id` attribute equal to `'fact'`.

12. We’ll need to include the event listener with each `<img>` and edit the event listener so that it displays the fact in our new `<p>` element.
- In the `for...in` loop, inside each `<img>`, add an `onClick` event listener that calls `displayFact`.
- Inside `displayFact()` use `document.getElementById('fact')` to grab the `<p>` element where we’ll add our fact. Change the `.innerHTML` of the `<p>` element to our randomly selected fact.

### Extra

13. Create a `showBackground` constant. You can set its value to either `true` or `false`.\
If `showBackground` is `true`, background should show up. If it’s `false`, it should not. Use the `&&` operator in `animalFacts` to implement this feature.\
Toggle the value of `showBackground` between `true` and `false` to check it is working.
