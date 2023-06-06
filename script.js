'use strict';

const mealInput = document.getElementById('get-input');
const containerInfo = document.getElementById('container-details');

const renderMeal = function (data) {
  data.map((getall) => {
    console.log(getall);
    const html = `<div class="food-details">
    FOOD INFO: ${getall.strMeal}
    <div class="span-across">
    <img src="${getall.strMealThumb}" alt="Meal Picture" class="div-row-one" />
      <div class="div-row-two" id="div-two">
      ${getall.strInstructions}</div>
    </div>
  </div>`;
    containerInfo.innerHTML = ' ';

    containerInfo.insertAdjacentHTML('beforebegin', html);

    // containerInfo.insertAdjacentHTML('beforeend', html);
  });

  //   containerInfo.innerHTML = `<div class="food-details">
  //   FOOD INFO: ${data.strMeal}
  //   <div class="span-across">
  //   <img src="${data.strMealThumb}" alt="Meal Picture" class="div-row-one" />
  //     <div class="div-row-two" id="div-two">
  //     ${data.strInstructions}</div>
  //   </div>
  // </div>`;

  //   // containerInfo.insertAdjacentHTML('beforeend', html);
  //   containerInfo.style.opacity = 1;
};

mealInput.addEventListener('change', function (e) {
  e.preventDefault();

  console.log(mealInput.value);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderMeal(data.meals));

  mealInput.value = '';
});
