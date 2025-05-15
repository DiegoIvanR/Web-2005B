# Connect React with Redux

## Instructions

1. In **App.js**, let’s change the content of the `<p>` element to the `state` prop.

2. Now that `<p>` element is set up to render the `state` prop, lets pass in the `store` state and `dispatch` function as props to `App`.
<br>
In **index.js**, in the body of `render()`, add the `state` and `dispatch` props to the `App` component in `root.render()`. The `state` prop should be set to the `store`‘s current state and the `dispatch` prop should be set to the store‘s dispatch function (Do not call the function).

3. In **App.js**, the `App` component defines an `incrementerClicked()` function which will be called each time the `incrementer` button is clicked by the user. When this happens, the `store` should be notified, and the state should be incremented by `1`.
<br>
Inside `incrementerClicked()`, use the `dispatch` prop and the appropriate action creator to tell the `store` to increase its state by `1`.
<br>
Note the `“+”` button still won’t work until we subscribe to state changes. We’ll do this in the next step.

4. Pressing the `incrementer` button will send a `{ type: 'increment' }` action object to the `store` which increases the value of the state to 1. But, the UI doesn’t seem to be updating.
<br>
In order for the UI to react to changes to the state of the `store`, you have to subscribe a change listener to the `store` using `store.subscribe()`! Let’s open **index.js** to get started.
<br>
Below the declaration of the `render()` function, call `store.subscribe()` and pass in `render` as the argument so that the UI re-renders each time the state of the `store` changes.
<br>
In the browser, if you click on `“+”`, you’ll notice the count increase. Note that the `“-“` button does not work yet. We’ll fix that in the next step.

5. Nicely done! Press the `incrementer` button and you should see the counter increase in the UI! All that’s left to do is get the `decrementer` button’s event handler to work.
<br>
Within `decrementerClicked()`, dispatch a `"decrement"` type action to the `store`.