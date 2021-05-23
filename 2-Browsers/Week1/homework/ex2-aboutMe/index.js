'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const spanId = document.querySelectorAll('span');
spanId[0].id = 'Aerry';
spanId[1].id = 'Chicken-Biryani';
spanId[2].id = 'Quetta-Pakistan';

const listItems = document.querySelectorAll('li');
listItems.forEach((item) => (item.className = 'list-item'));

console.log(listItems.item);
