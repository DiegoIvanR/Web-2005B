# Chore Door

In this project, you will use your knowledge of JavaScript and the DOM to complete Chore Door, a single-page interactive game built with JavaScript.

## Instructions

### Getting Started

1. Take a moment to familiarize yourself with the existing code in <b>index.html</b>, <b>style.css</b>, and <b>script.js</b>.
<br>
Note that you’ll complete the functionality for the Chore Door game one step at a time in <b>script.js</b>.

2. Let’s start by accessing the elements of the door images. At the top of <b>script.js</b>, create a variable called `doorImage1` and set it to the HTML element with the `id` of `door1`.

3. There are three doors in the game! Let’s do the same for the other door images.
<br>
Create a variable called `doorImage2` and set it to the HTML element with the `id` of `door2`. Then, create another variable called `doorImage3` and set it to the HTML element with `id` of `door3`.

4. We also need to access the orange `div` that says “Good luck!” located under the doors on the webpage. Below the variables containing the door images, create a variable called `startButton` and set it to the HTML element with the `id` of `start`.
<br>
We will be manipulating this `div` in a future task to display the game result.

### Checking Doors

5. Now that we have access to the HTML elements we need to manipulate, let’s build some game logic.
<br>
First, we will create a function to check if the door that the player clicked on is closed. This is to make sure that clicking on already opened doors will not affect the progress of the game.
<br>
Below all the variable declarations, create a function called `isClicked` that takes the parameter of `door`.

6. Inside the `isClicked()` function, create a conditional that checks if the `src` property of `door` (using `door.getAttribute('src')`) is equal to `closedDoorPath`. If the condition is truthy, return `true`. Otherwise, return `false`.

7. Next, we will create another function that checks if the player clicked on the Chore Door! The logic will be similar to the `isClicked()` function.
<br>
Create a function called `isBot` that takes `door` as its parameter. Inside the function, create a conditional statement that checks if the `src` property of `door` (using `door.getAttribute('src')`) is equal to `botDoorPath`. If the conditional is truthy, return `true`.

### Writing Play and Game Over Logic

8. Let’s continue writing our game logic.
<br>
Create a function to display a game over message depending on whether the player has won or lost. Create a function called `gameOver` that takes `status` as its parameter.

9. Inside the `gameOver()` function, write a conditional statement that checks if `status` is equal to `'win'`.
<br>
If the conditional statement evaluates to a truthy value, set the content of the `startButton` element to `'You win! Play again?'`. If the condition is falsy, set it to `'Game over! Play again?'`.

10. As the last line of the `gameOver()` function block, set `currentlyPlaying` to `false`. This will allow our start button to be triggered again for another round of Chore Door.

11. Using the three functions we’ve created so far, we will write the logic for progressing the game.
<br>
Create a function called `playDoor` that takes `door` as its parameter. Inside the function, decrement `numClosedDoors` by one. This will decrease the value of the `numClosedDoors` variable by one every time a door is opened.

12. Below where we decremented the `numClosedDoors` variable, create a conditional statement that checks if `numClosedDoors` equals 0. This will mean that the player has successfully avoided the ChoreBot! If the conditional evaluates to true, call `gameOver()` with the argument of `'win'`.

13. Let’s add another condition after the `if` block. Check if calling the `isBot()` function with the argument of `door` returns `true`. If so, run `gameOver()` with no argument.

### Choosing a Random Chore Door

14. What good is this game if you know where the ChoreBot is always hiding?
<br>
Create a function called `randomChoreDoorGenerator`. Inside the function, create a variable called `choreDoor`, and set it to a random integer between 0 and `numClosedDoors`.
<br>
We will use this function to randomize which door ChoreBot will hide behind.

15. Now that the `randomChoreDoorGenerator()` function randomly generates one of three possible values (`0`, `1`, or `2`), it’s time to write the logic that assigns where the ChoreBot will hide based on each outcome.
<br>
First, create an `if` conditional to check if `choreDoor` equals 0. If the condition is true, set `openDoor1` to `botDoorPath` (the ChoreBot will hide in the first door!), `openDoor2` to `beachDoorPath`, and `openDoor3` to `spaceDoorPath`.

16. Add an `else if` statement to our previous `if` statement to check if `choreDoor` equals 1. If the condition is true, set `openDoor1` to `beachDoorPath`, `openDoor2` to `botDoorPath` (the ChoreBot will hide in the second door!), and `openDoor3` to `spaceDoorPath`.

17. Lastly, add an `else` statement to our previous `else if` statement. Inside the `else` conditional block, set `openDoor1` to `beachDoorPath`, `openDoor2` to `spaceDoorPath`, and `openDoor3` to `botDoorPath` (the ChoreBot will hide in the third door!).

### Starting the Game

18. Create a function called `startRound` at the bottom of <b>script.js</b>. Inside the function, set the `src` properties of `doorImage1`, `doorImage2`, and `doorImage3` as `closedDoorPath`. We want to make sure that all the doors are closed at the start of the game.

19. We’ve got some more variables to reset to ensure that players can start with a fresh slate. Set `numClosedDoors` back to 3, `currentlyPlaying` to `true`, and the content of `startButton` element to `'Good Luck!'`.
<br>
Lastly, run the `randomChoreDoorGenerator()` function as the last line of the `startRound()` function block.

### Adding onclick Handlers to Doors and Start Button

20. Below the function `randomChoreDoorGenerator`, set the `onclick` property of `doorImage1` as an arrow function with no arguments. Inside the function, add an `if` statement that checks if the user is `currentlyPlaying` and if the clicked door is closed by doing a call to `isClicked(doorImage1)`.
<br>
If the condition is true, set the `src` property of `doorImage1` to `openDoor1`. Finally, in the last line of the function, make a call to `playDoor()` function, passing as argument `doorImage1`.

21. Do the same thing as what you did in the previous task, but for `doorImage2` and `doorImage3`. Keep in mind that you need to use `openDoor2` and `openDoor3` respectivley when modifying the `src` attribute and `doorImage2` and `doorImage3` when calling `playDoor()` function.

22. Set the `onclick` property of `startButton` as an arrow function with no arguments. Inside the function, add an `if` statement that checks if the user is NOT `currentlyPlaying`. Inside the `if` block, make a call to `startRound()` function.

23. Our game logic is complete. One last thing to do to get the game started —call the `startRound()` function as the last line of <b>script.js</b>.