'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
  // TODO complete this function

  // Grabbing the IMG and Storing insinde the Variable Using Initial Value =0; to Calculate the Pixels
  const getImage = document.querySelector('IMG');
  let initialValue = 0;

  //This Function will make the cat Move on the screen in direction to right.
  let getCatMoving = setInterval(makeCatWalk, 50);
  function makeCatWalk() {
    initialValue += 10;
    getImage.style.left = `${initialValue}px`;

    // This statemnt will make sure the loop will be continue when the cat reached the right corner

    if (initialValue === 1080) {
      initialValue = 0;
    }

    // This statement will bring the dancing cat on screen a

    if (initialValue === 520) {
      clearInterval(getCatMoving);
      getImage.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

      setTimeout(function () {
        getImage.src =
          'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        getCatMoving = setInterval(makeCatWalk, 50);
      }, 5000);
    }
  }
}

// TODO execute `catWalk` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', catWalk);
