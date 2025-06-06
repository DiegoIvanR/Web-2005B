# Broadway

In this project, you will use properties such as display and position to improve the layout of the landing page for a fictional design firm, Broadway Design.

The site has some style rules to begin with. You will improve the layout and positioning of the navigation menu at the top of the page and the three supporting sections (Design, Develop, Deploy) below the image.

## Instructions

1. The `<header>` currently scrolls with the rest of the document.
<br>
Set its `position` property so that it stays stuck to the top of the window when the document is scrolled.

2. The `<header>` has shrunk!
<br>
Change the width of the same element so that it stretches across its entire parent element.

3. List items (`<li>`) inside of the navigation section (`<nav>`) are currently displayed as a list.
<br>
Set their `display` property so that they can appear next to each other horizontally (but so that you still set their `width` in the next task).

4. Set the width of the same elements to 80 pixels.

5. After changing the `position` of the `<header>` element to `fixed`, the contents of the entire site after it shifted upwards.
<br>
Set the `position` of `<main>` so that we can position it relatively.

6. The `<header>` has disappeared behind the `<main>`.
<br>
Use `z-index` to make the `<header>` visible.

7. Now the navigation bar looks good, but it is blocking the title at the top of the page.
<br>
Offset `<main>` by 80 pixels from the top.

8. Now, fix up the supporting element style below the image.
<br>
Add a declaration to the `.supporting .col` rule set so that these elements can appear horizontally next to each other but have defined `height` and `width`.

9. Inspect the `.supporting .col` elements—they don’t seem to be flowing horizontally yet because they have no set `width`. Set the width and height of `.supporting .col` elements to 200 pixels.

10. Great work, the Broadway Design site looks much better!
<br>
If you want to continue coding, challenge yourself to make the `<footer>` element also fixed to the bottom of the page regardless of scrolling.