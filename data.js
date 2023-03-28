"use strict";

// ========== Load & startup ========== //

window.addEventListener("load", start);

async function start() {
  // laver constant for alle pokémons
  const pokemons = await getPokemon("2data.json");
  showPokemons(pokemons);
}
// "https://cederdorff.github.io/dat-js/05-data/pokemons.json"

// ========== Read ========== //
// Read (Get) pokemons fra json file located on GitHub
async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

//Create HTML and display all users from given list
function showPokemons(pokemonsList) {
  for (const pokemon of pokemonsList) {
    showPokemon(pokemon);
  }
}

function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html */ `
    <article class="grid-item">
      <img src="${pokemon.image}">
      <h2>${pokemon.name}</h2>
      <p>${pokemon.description}</p>
      <p>Index number #${pokemon.dexindex}</p>
      <p>Type: ${pokemon.type}</p>       
    </article>
  `
  );

  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon) {
  console.log(pokemon);

  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog-pokemon-name").textContent = pokemon.name;

  // description
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
  document.querySelector("#dialog-height").textContent = pokemon.height;
  document.querySelector("#dialog-weight").textContent = pokemon.weight;
  document.querySelector("#dialog-generation").textContent = pokemon.generation;
  document.querySelector("#dialog-spilversion").textContent =
    pokemon.spilversion;
  // laver function til at se om en pokemon stadig kan evolve
  let evolve = generateEvolve(pokemon);
  document.querySelector("#dialog-evolve").textContent = evolve;

  //stats
  document.querySelector("#dialog-hp").textContent = pokemon.statsHP;
  document.querySelector("#dialog-attack").textContent = pokemon.statsAttack;
  document.querySelector("#dialog-defence").textContent = pokemon.statsDefence;
  document.querySelector("#dialog-sp-attack").textContent =
    pokemon.statsSpecialAttack;
  document.querySelector("#dialog-sp-defence").textContent =
    pokemon.statsSpecialDefence;
  document.querySelector("#dialog-speed").textContent = pokemon.statsSpeed;

  // show dialog
  document.querySelector("#dialog-box").showModal();
}

function generateEvolve(pokemon) {
  let maybeEvolve = "";
  if (pokemon.canEvolve == true) {
    maybeEvolve = `${pokemon.name} is still able to evolve.`;
  } else {
    maybeEvolve = `${pokemon.name} is not able to evolve.`;
  }
  return maybeEvolve;
}
