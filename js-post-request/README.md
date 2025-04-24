# Making a POST request

We will need a Rebrandly API key. To do this, create an account in [Rebrandly](https://app.rebrandly.com/) and generate a new API key.

## Instructions

### Making the POST request

1. Set the value of the `apiKey` variable to your Rebrandly API key as a string.
<br>
If a correct key is not assigned, proper results will not be seen in the steps afterwards.

2. We will make our POST request inside the `shortenUrl()` function. Inside the code block of `shortenUrl()`, create a `const` variable named `urlToShorten` and assign it `inputField.value`. `urlToShorten` will keep the value of what is being typed into the input field.
<br>
Note that we will be working inside `shortenUrl()` for the remainder of this exercise.

3. Underneath the `urlToShorten` declaration, create another `const` variable named `data` and assign it to the stringified version of `{destination: urlToShorten}`. We can use the `JSON.stringify()` method to do this.
<br>
The `data` variable will be used to send the information, which needs to be in string format, to the request body.

4. Below our `data` variable declaration, call the `fetch()` function. Pass `url` as its first argument and an empty object as its second argument.

5. Now it’s time to add some properties to the empty object that you just created. Add a property with the key `method` and the value `'POST'`.

6. In the same object, add another property. The key for this property is `headers` and the value will be the following object, we will use this to connect to the API.:

```js
{
  'Content-type': 'application/json',
  'apikey': apiKey
}
```

7. In that same object that has the properties `method` and `headers`, add another property. The key is named `body` and the value will be `data`.
<br>
We’ve now created an object containing all the information we need for our POST request!
    
### Handling the POST response

8. Chain a `.then()` method at the end of the `fetch()` function. As its first argument, pass an arrow function as a callback that takes response as its single parameter.

9. Inside the callback function of the `.then()` method, use a conditional statement to check the value of the `ok` property of response. If it evaluates to a truthy value, return `response.json()`.

10. Below the curly braces of the conditional statement, `throw` a new `Error` in case `response.ok` is falsy.
<br>
The error message should be `'Request failed!'`.

11. As the second argument of the `.then()` method, add another arrow callback function that takes `networkError` as a single parameter.
<br>
Log the `networkError.message` inside of the callback function.
<br>
By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!

12. Chain another `.then()` method to the end of the previous `.then()` method.

13. Pass in an anonymous arrow function as an argument for our second `.then()`. This callback function will take `jsonResponse` as its single parameter.
<br>
Inside the callback function, call `renderResponse()` and pass in `jsonResponse`.
<br>
The `renderResponse()` helper function can be viewed at **public/helperFunctions.js**.
<br>
Put in any URL in the text field, and then click the shorten button on the webpage. Make sure you include the entire link, including `'http://'` or `'https://'`.