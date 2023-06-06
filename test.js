const url = 'https://tasty.p.rapidapi.com/recipes/get-more-info?id=8130';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6bf8425849msh23c0e2a518cdc67p190ad7jsn7ae11e5fd1fd',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data));
