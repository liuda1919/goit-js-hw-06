const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const createList = content => {
  return content.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    return li;
  });
}
const elements = createList(ingredients);
ingredientsList.append(...elements);
console.log(ingredientsList);