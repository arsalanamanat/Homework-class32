/* eslint-disable no-restricted-syntax */
'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  return fetch(url);
}

async function fetchAndPopulatePokemons(data) {
  // TODO complete this function
  const jsonData = await data.json();
  const { results } = jsonData;

  const submitBtn = document.createElement('button');
  submitBtn.innerText = `Get Pokemon`;
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.style.display = 'block';
  document.body.appendChild(submitBtn);

  const selectList = document.createElement('select');
  selectList.setAttribute('id', 'selectList');
  selectList.style.display = 'block';
  selectList.style.marginTop = '20px';
  document.body.appendChild(selectList);

  const imageElement = document.createElement('img');
  document.body.appendChild(imageElement);

  selectList.addEventListener('change', (e) => {
    fetchImage(e.target.value, imageElement);
  });

  submitBtn.addEventListener('click', getPokemonName);
  let id = 0;

  function getPokemonName() {
    results.forEach((pokemon) => {
      const options = document.createElement('option');
      id++;
      options.setAttribute('value', id);
      options.textContent = pokemon.name;
      selectList.appendChild(options);
    });
  }
}

async function fetchImage(id, imageElement) {
  // TODO complete this function
  const imageDataApi = await fetchData(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );
  const imageJsonData = await imageDataApi.json();
  const { sprites } = imageJsonData;
  imageElement.src = ' ';
  imageElement.src = sprites.front_default;
}

async function main() {
  // TODO complete this function
  try {
    const responseData = await fetchData(
      `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`
    );
    fetchAndPopulatePokemons(responseData);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
