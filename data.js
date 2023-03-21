"use strict";

console.log("JavaScript is live!");
window.addEventListener("load", start);

const Markus = {
  name: "Ampharos",
  description:
    "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
  ability: "Static",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png",
  footprint:
    "    https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc03.deviantart.net%2Ffs71%2Fi%2F2013%2F223%2F1%2F2%2F181_mega_ampharos_by_pklucario-d6houxg.png&f=1&nofb=1&ipt=b6d371401e321b8eb396137f840557a9f72336f76d2badea12a1062a8718ee22&ipo=images",
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

function start() {
  showPokemon(Markus);
}

function showPokemon(pokemon) {
  const pokemonDialog = /*html */ `
    <ul>
        <li>The pokémons name is: ${pokemon.name}</li>
        <img src="${pokemon.image}">
        <li>Ability: ${pokemon.ability}</li>
        <li>${pokemon.description}</li>
        <li>Index number #${pokemon.dexindex}</li>
        <li>Type: ${pokemon.type}</li>
        <li>Subtype: ${pokemon.subtype}</li>
        <li>Weaknesses: ${pokemon.weaknesses}</li>
        <li>The pokemon can be: ${pokemon.gender}</li>
        <li>${pokemon.name}'s' weight is ${pokemon.weight} g</li>
        <li>${pokemon.name}'s height is ${pokemon.height} cm</li>
        <li>Generation: ${pokemon.generation}</li>
        <li>First gameversion: ${pokemon.spilversion}</li>
        <li>Can ${pokemon.name} evolve further? ${pokemon.canEvolve}</li>
        <li>HP stat out of 15: ${pokemon.statsHP}</li>
        <li>Attack stat out of 15: ${pokemon.statsAttack}</li>
        <li>Defence stat out of 15: ${pokemon.statsDefence}</li>
        <li>Special attack stat out of 15: ${pokemon.statsSpecialAttack}</li>
        <li>Special defence stat out of 15: ${pokemon.statsSpecialDefence}</li>
        <li>Speed stat out of 15: ${pokemon.statsSpeed}</li>
        <img src="${pokemon.footprint}">
    </ul>
  `;
  document
    .querySelector("#view")
    .insertAdjacentHTML("afterbegin", pokemonDialog);
}
