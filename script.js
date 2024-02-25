const input = document.getElementById('fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
  let results = [];

  // loops through the fruits array and pushes any matches
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].toLowerCase().includes(str.toLowerCase())) {
      results.push(fruit[i]);
    }
  }

  // return the filtered array
  return results;
}


function searchHandler(e) {
  const str = e.target.value;

  // call the search function and store the results
  const results = search(str);

  // If the input string is empty, hide the suggestions container
  if (str.length === 0) {
    suggestions.style.display = 'none';
  } else {
    // show the suggestions container
    suggestions.style.display = 'block';
    suggestions.innerHTML = '';// clear previous suggestions
		// loop over the results and create a new li for each one

    for (let i = 0; i < results.length; i++) {
      const li = document.createElement('li');
      li.textContent = results[i];
      li.addEventListener('click', () => {
        input.value = results[i];
        suggestions.style.display = 'none';
      });
      suggestions.appendChild(li);
    }
  }
}


function showSuggestions(results) {
  if (results.length > 0) {
    suggestions.style.display = 'block';
    suggestions.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
      const li = document.createElement('li');
      li.textContent = results[i];
      li.addEventListener('click', () => {
        input.value = results[i];
        suggestions.style.display = 'none';
      });
      suggestions.appendChild(li);
    }
  } else {
    // If there are no suggestions, hide the suggestions container
    suggestions.style.display = 'none';
  }
}

function useSuggestion(e) {
	input.value = e.target.textContent;
	suggestions.style.display = 'none';
  }

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);