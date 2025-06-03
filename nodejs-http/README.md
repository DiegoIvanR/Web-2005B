# Rock-Paper-Scissors

Did you know that the game Rock-Paper-Scissors can be dated back to the Han dynasty (206 BCE - 200 CE)?

Using your knowledge in Node.js, let’s create an online version of Rock-Paper-Scissors where you can play against the HTTP server. Using the http module, we will build a simple HTTP server. We will practice how to route requests based on pathname and request methods. We will also be using other core Node.js components in this project —we will use the fs module to stream HTML files and create an URL object to extract queries from a URL.

## Instructions

### Creating a Server

1. In this project, we will use the built-in `http` module to create a server. Let’s require the `http` module at the top of **app.js**.

2. Next, using the `.createServer()` method, create an HTTP server and save it as a `const` variable called `server`. Using the arrow function expression, create an anonymous callback function that recieves `request` and `response` as arguments.

### Routing

3. Inside the callback function of the `.createServer()` method, create a new `URL` object and save it to a `const` variable called `url`. Initialize the `URL` object with two arguments: `request.url` and `http://${request.headers.host}`.

4. Now, let’s create a `switch` statement that evaluates the value of `url.pathname`. Inside the `switch` statement, create two cases: a `case` that matches `'/'` and a `default` case.

### Handling Get Requests

5. Inside the `case` for `'/'`, create an `if` statement that checks if the request method is equal to `'GET'`.

6. Inside the `if` statement checking for `'GET'` requests, create a `const` variable called `name` and save the value of the `'name'` query using `url.searchParams.get()` method.
<br>
Log the value of the `'name'` query to the console.

7. Next, still inside the `if` statement checking for `'GET'` requests, write a response header. Set the status code as 200 and the status message as a JSON array that contains the `'Content-Type'` key and `'text/html'` value.

8. We will want to display the **index.html** page when users access the root of our website.
<br>
Let’s read our **index.html** file using the `.createReadStream()` method of the `fs` module and pipe the data to the `response` by chaining the `.pipe()` method.
<br>
Then, add a `break` statement at the end of the `if` statement code block.

### Handling Post Response

9. Let’s handle another request method! Create an `else if` statement that checks for the `'POST'` request method.
<br>
Inside the `else if` statement, call the `handlePostResponse()` function, defined at the bottom of **app.js**. Pass in `request` and `response` as arguments of the function.
<br>
Then, add a `break` statement at the end of the `else if` statement.

### Handling Default Case

10. Let’s complete our `switch` statement. Inside the `default` case, we will display **404.html** if a user tries to access a page or a file that doesn’t exist.
<br>
Write a response header using the `.writeHead()` method of the `response` object. Set an appropriate status code for a page or file not found and the status message as a JSON array that contains the `'Content-Type'` key and `'text/html'` value.

11. Now, read **404.html** using the `.createReadStream()` method of the `fs` module and pipe the data to the `response` by chaining the `.pipe()` method.
<br>
Then, add a `break` statement at the end of the code block.

### Running the Server

12. Finally, let’s have our `server` listen at port 4001 using the `.listen()` method. As the second argument of the `.listen()` method, create an anonymous callback function using the arrow function syntax.
<br>
Inside the callback function, log that the server is listening at `server.address().port`.

13. Try out our Rock-Paper-Scissors game by running the app with the `node` command then clicking on the “Refresh Browser” button.
<br>
Add a `name` query with your name as its value. For example, try navigating to `http://localhost:4001/?name=Codey`. See that the header text in **index.html** changes!
<br>
Can you win 3 games in a row?