"use strict";

console.log("JavaScript is live!");
window.addEventListener("load", start);

function start() {
  // laver constant for min pokemon
  const Markus = {
    name: "Ampharos",
    description:
      "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
    ability: "Static",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png",
    footprint: "🐾",
    dexindex: 181,
    type: "Electric",
    subtype: "None",
    weaknesses: "Ground",
    gender: "both ♂ & ♀",
    weight: 61500,
    height: 140,
    generation: 2,
    spilversion: "Gold, Silver & Crystal",
    canEvolve: false,
    statsHP: 6,
    statsAttack: 5,
    statsDefence: 5,
    statsSpecialAttack: 7,
    statsSpecialDefence: 6,
    statsSpeed: 4,
  };

  //viser min pokemon
  showPokemon(Markus);
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
    <p>HP stat out of 15: ${pokemon.statsHP}</p>
    <p>Attack stat out of 15: ${pokemon.statsAttack}</p>
    <p>Defence stat out of 15: ${pokemon.statsDefence}</p>
    <p>Special attack stat out of 15: ${pokemon.statsSpecialAttack}</p>
    <p>Special defence stat out of 15: ${pokemon.statsSpecialDefence}</p>
    <p>Speed stat out of 15: ${pokemon.statsSpeed}</p>
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
