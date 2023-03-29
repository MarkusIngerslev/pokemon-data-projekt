"use strict";

// ========== Load & startup ========== //

window.addEventListener("load", start);

async function start() {
  // laver constant for alle pokémons
  const pokemons = await getPokemon();
  pokemons.sort(compareDexIndex);
  showPokemons(pokemons);
  shopw;
}

// ========== Read ========== //
// Read (Get) pokemons fra json file located on GitHub
async function getPokemon() {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

// ========== Sort Pokemons ========== //
function compareDexIndex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}

// ========== For loop ========== //
// For loop til at fremvise alle elementer i json array
function showPokemons(pokemonsList) {
  for (const pokemon of pokemonsList) {
    showPokemon(pokemon);
  }
}

// ========== Laver html opsætning ========== //
function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html */ `
    <article class="grid-item">
      <img src="${pokemon.image}">
      <h2>${pokemon.name}</h2>
      <p class="p-dexindex">Index number #${pokemon.dexindex}</p>
      <p class="p-type">Type: ${pokemon.type}</p>       
      <p>${pokemon.description}</p>
    </article>
  `
  );
  // Event der kalder på et klikket element
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  // nestet function til at lave dialog view om
  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

// ========== Ændre dialog view til klikket objekt ========== //
function showPokemonModal(pokemon) {
  console.log(pokemon);

  // Navn og billed
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog-pokemon-name").textContent = pokemon.name;

  // Beskrivelse
  document.querySelector(
    "#dialog-dexindex"
  ).textContent = `Index number: #${pokemon.dexindex}`;
  document.querySelector("#dialog-type").textContent = `Type: ${pokemon.type}`;
  document.querySelector(
    "#dialog-gender"
  ).textContent = `Gender: ${pokemon.gender}`;
  document.querySelector(
    "#dialog-weaknesses"
  ).textContent = `Weaknesses: ${pokemon.weaknesses}`;
  document.querySelector(
    "#dialog-height"
  ).textContent = `Height: ${pokemon.height} cm`;
  document.querySelector(
    "#dialog-weight"
  ).textContent = `Weight: ${pokemon.weight} g`;
  document.querySelector(
    "#dialog-generation"
  ).textContent = `Generation: ${pokemon.generation}`;
  document.querySelector(
    "#dialog-spilversion"
  ).textContent = `GameVersion: ${pokemon.spilversion}`;

  // laver function til at se om en pokemon stadig kan evolve
  let evolve = generateEvolve(pokemon);
  document.querySelector("#dialog-evolve").textContent = evolve;

  //stats
  document.querySelector(
    "#dialog-hp"
  ).textContent = `Hp stat: ${pokemon.statsHP}`;
  document.querySelector(
    "#dialog-attack"
  ).textContent = `Attack stat: ${pokemon.statsAttack}`;
  document.querySelector(
    "#dialog-defence"
  ).textContent = `Defence stat: ${pokemon.statsDefence}`;
  document.querySelector(
    "#dialog-sp-attack"
  ).textContent = `Special attack stat: ${pokemon.statsSpecialAttack}`;
  document.querySelector(
    "#dialog-sp-defence"
  ).textContent = `Special defence stat: ${pokemon.statsSpecialDefence}`;
  document.querySelector(
    "#dialog-speed"
  ).textContent = `Speed stat: ${pokemon.statsSpeed}`;

  // show dialog
  document.querySelector("#dialog-box").showModal();
}

function generateEvolve(pokemon) {
  // variable
  let maybeEvolve = "";
  //tjekker om en pokemon stadig kan udvikle sig.
  if (pokemon.canEvolve == true) {
    // Vis den staig kan evolve
    maybeEvolve = `${pokemon.name} is still able to evolve.`;
  } else if (pokemon.canEvolve == false) {
    // vis den ikke kan evolve
    maybeEvolve = `${pokemon.name} is not able to evolve.`;
  }
  return maybeEvolve;
}
