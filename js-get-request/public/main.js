// Information to reach API
const url = "https://api.datamuse.com/words?sl=";

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
//import { renderRawResponse } from './helperFunctions.js';

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endPoint = url + wordQuery;
  fetch(endPoint).then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error('Request failed.');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    //renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
