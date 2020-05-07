import tokenService from './tokenService'
const BASE_URL = '/api/recipes/';

export default {
    index,
    create
};

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(recipe) {
  return fetch(`${BASE_URL}newRecipe`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(recipe)
  }).then(res => res.json());
}

