# CodeyOverflow Forum

In this project, we will build the beginnings of a web forum! A forum is an online discussion board where users can exchange their opinions on a variety of topics. The most important component of a forum is the comment section. This is what we’ll work on in this project.

In building this application, you will sharpen your skills in React components by practicing using props as well as defining, rendering, and referencing components.

## Instructions

### Setting Up Header and Body

1. Take a look at the files provided for this project.
<br>
There is a file named <b>commentData.js</b> which contains an array of comment objects with `profileImg`, `username`, and `comment` as its properties. You will use this to populate the comments on the forum.
<br>
Your comment section will be composed of `Card` components, which will be comprised of smaller `Header` and `Body` child components.
<br>
Next, <b>App.jsx</b> will contain the top-level component. The data in <b>commentData.js</b> will be retrieved in <b>App.jsx</b> and flow downward from `App` to `Card` to `Header` and `Body`.
<br>
Once you feel comfortable with the structure of this application, move on to the next checkpoint.

2. Let’s start with the smallest component, the `Body`. The `Body` is responsible for showing the comments that users have written. It will work with the `comment` property of our passed-down `comments` object extracted from <b>commentData.js</b>.
<br>
Open up <b>Body.jsx</b> and define your `Body` component.
<br>
This component should receive `props`. This `props` object contains all of the data on our comment, such as the username, profile image, and comment, but the `Body` works specifically with only the `comment` property.
<br>
Have the component return a `<p>` element that contains the `comment` property from `props`.

3. Export the `Body` component after its function definition so that it can be imported and used in <b>Card.jsx.</b>

4. Open <b>Header.jsx</b> and define your `Header` component.
<br>
This component will be responsible for the `profileImg` and `username` properties of our passed-down `comments` object.
<br>
The `Header` component should receive `props`. The component should return two elements, an `<img>` element whose `src` attribute will receive the `profileImg` property from `props`, and a `<h1>` element, displaying `username` from `props`.

5. Export the `Header` component after its function definition so that it can be imported and used in <b>Card.jsx</b>.

### Setting Up Card

6. Let’s take a brief detour back to <b>App.jsx</b>.
<br>
Currently, the `App` component is empty. This is the top-level component and it is responsible for returning the interface to be rendered. In this case, it will be returning an instance of the `Card` component for every comment in <b>commentData.js</b>.
<br>
In the `App` component body, map over the `comments` array with the argument named `comment` and return an instance of the `Card` component.
<br>
For each component, give it an attribute named `commentObject` and the value `{comment}`.

7. You’ve set up `App` to pass down information to the `Card` component. Let’s put the pieces together.
<br>
Open <b>Card.jsx</b> and import the `Header` and `Body` components. `Card` will be the outer “shell” that contains our two smaller components: `Card` is the parent, and `Header` and `Body` are the child components.
<br>
Begin defining the `Card` component. `Card` should receive `props`.
<br>
`Card` should return an instance of the `Header` component, and an instance of the `Body` component.

8. Previously in <b>App.jsx</b>, you’ve passed down a `commentObject` attribute to `Card` which contains an object with three properties (`profileImg`, `username`, and `comment`).
<br>
It’s time to access those and finally pass them to the children components: `Header` and `Body`.
<br>
`Header` expects two `props`, `profileImg` and `username`.
<br>
Give the `Header` instance an attribute named `profileImg` and the value of `props.commentObject.profileImg`.

9. Next, give the `Header` instance an attribute named `username` and the value of `props.commentObject.username`.

10. The `Body` instance expects a `comment` prop.
<br>
Give the `Body` instance an attribute named `comment` and the value of `props.commentObject.comment`.

11. Now, export the `Card` component so it can be imported and used.

### Rendering the Application

12. Open up <b>App.jsx</b> again, and import the `Card` component which is now defined and exported.

13. Then, export the `App` component.

14. Open up <b>main.jsx</b> and import the `App` component.

15. As you may recall, <b>main.jsx</b> is largely responsible for only rendering the `App` component.
<br>
Use `.createRoot()` to supply a container where you will render the `App` component. Then, use `.render()` to render it into the DOM!. Use `root` as the id in the call to `.getElementById`.
<br>
If you’ve succeeded, you should see three comments rendered on the web browser, engaging in a riveting discussion about animals.