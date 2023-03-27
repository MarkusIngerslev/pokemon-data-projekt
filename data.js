"use strict";

console.log("JavaScript is live!");
window.addEventListener("load", start);

async function start() {
  // laver constant for alle pokémons
  const pokemon = await getPokemon(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );

  //viser alle pokémons
  pokemon.forEach(showPokemon);
}

function showPokemon(pokemon) {
  document.querySelector("#view").insertAdjacentHTML(
    "afterbegin",
    /*html */ `
    <article>
      <img src="${pokemon.image}">
      <h2>${pokemon.name}</h2>
      <p>Ability: ${pokemon.ability}</p>
      <p>${pokemon.description}</p>
      <p>Index number #${pokemon.dexindex}</p>
      <p>Type: ${pokemon.type}</p>
      <p>Subtype: ${pokemon.subtype}</p>
      <p>Weaknesses: ${pokemon.weaknesses}</p>
      <p>The pokemon can be: ${pokemon.gender}</p>
      <p>${pokemon.name}'s' weight is ${pokemon.weight} g</p>
      <p>${pokemon.name}'s height is ${pokemon.height} cm</p>
      <p>Generation: ${pokemon.generation}</p>
      <p>First gameversion: ${pokemon.spilversion}</p> 
    </article>
  `
  );

  document.querySelector("#dialog-box").insertAdjacentHTML(
    "afterbegin",
    /* html */ `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.image}">
    <p>Ability: ${pokemon.ability}</p>
    <p>${pokemon.description}</p>
    <p>Index number #${pokemon.dexindex}</p>
    <p>Type: ${pokemon.type}</p>
    <p>Subtype: ${pokemon.subtype}</p>
    <p>Weaknesses: ${pokemon.weaknesses}</p>
    <p>The pokemon can be: ${pokemon.gender}</p>
    <p>${pokemon.name}'s' weight is ${pokemon.weight} g</p>
    <p>${pokemon.name}'s height is ${pokemon.height} cm</p>
    <p>Generation: ${pokemon.generation}</p>
    <p>First gameversion: ${pokemon.spilversion}</p>
    <p>Can ${pokemon.name} evolve further? ${pokemon.canEvolve}</p>
    <p>HP stat: ${pokemon.statsHP} out of 15</p>
    <p>Attack stat: ${pokemon.statsAttack} out of 15</p>
    <p>Defence stat: ${pokemon.statsDefence} out of 15</p>
    <p>Special attack stat: ${pokemon.statsSpecialAttack} out of 15</p>
    <p>Special defence stat: ${pokemon.statsSpecialDefence} out of 15</p>
    <p>Speed stat: ${pokemon.statsSpeed} out of 15</p>
    <p>Footprint ${pokemon.footprint}</p>
    `
  );

  document
    .querySelector("#view article:last-child")
    .addEventListener("click", pokemonClicked);
  function pokemonClicked() {
    //show dialog
    document.querySelector("#dialog-box").showModal();
  }
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
