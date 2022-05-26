/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

// function must be written to create a DOM that reflects our HTML
// a new <div> element should be created and assigned a variable name to make it more 'tangible'
// our <div> has a class attribute called "column-third". Use .setAttribute('class', 'column-third') for the div we just created.
// use appendChild() to make the 'div' and 'class' attribute in relation to one another so then it can me <div class="column-third">
// repeat steps to create new <div> element and corresponding attribute classes then append them.
// create a new element for <img> and set it's attributes except it will be called src with the imageUrl.
//    .setAttribute for src and to access our imageUrl from our array, we should use its property. We will use .imageUrl
//    <img src = "images/pikachu.png"> will also be divName.setAttribute('src', pokemon.imageUrl);
// for text content, we will use Node.textContent = pokemon.name to access the name object of our pokedex array.
// append it to the corresponding parent element.

function renderPokemon(pokemon) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'column-third');

  var nextDiv = document.createElement('div');
  nextDiv.setAttribute('class', 'pokemon-card');
  newDiv.appendChild(nextDiv);

  var pokemonImage = document.createElement('img');
  pokemonImage.setAttribute('src', pokemon.imageUrl);
  nextDiv.appendChild(pokemonImage);

  var thirdDiv = document.createElement('div');
  thirdDiv.setAttribute('class', 'pokemon-card-text');
  nextDiv.appendChild(thirdDiv);

  var pokemonNameElement = document.createElement('h2');
  pokemonNameElement.textContent = pokemon.name;
  thirdDiv.appendChild(pokemonNameElement);

  var pokemonNumberElement = document.createElement('h3');
  pokemonNumberElement.textContent = pokemon.number;
  thirdDiv.appendChild(pokemonNumberElement);

  var pElement = document.createElement('p');
  pElement.textContent = pokemon.description;
  thirdDiv.appendChild(pElement);

  return newDiv;
}

// We will now how to append what we have written here to the "row" element from our index.html document.
// first select the "row" element with a querySelector method. Assign a variable to make it more 'tangible' to work with.
// create a loop in order to go through our pokedex/renderPokemon.
//    within the loop, we must pass the object (pokedex[i]) to renderPokemon
// then pass it to "row" element.

var divRow = document.querySelector('.row');
for (var i = 0; i < pokedex.length; i++) {
  var accessPokemon = renderPokemon(pokedex[i]);
  divRow.appendChild(accessPokemon);
}
