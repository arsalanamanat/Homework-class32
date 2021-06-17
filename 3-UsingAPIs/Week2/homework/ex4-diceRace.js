'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  // TODO complete this function; use Promise.race() and rollDice()
  const promiseArray = dices.map((dice) => rollDice(dice));
  return Promise.race(promiseArray);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    await rollTheDices();
  } catch (error) {
    console.log(error);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;
