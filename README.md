# Data Pokemon Projekt

## Omkring projeket

Gennem dette projeket har jeg arbejdet på at fåt læst en _**remote json file**_, og så få den vist på en [hjemmeside](https://markusingerslev.github.io/pokemon-data-projekt/ "Min pokemon hjemmeside"). Dette har jeg gjort gennem brugen af `async` `await` & `fetch`.

Alt JavaScript er skrevet uden nogen frameworks eller libaries. Der bliver dog brug vs code extension **es6-string-html** til at skrive html kode i JavaScript nemmer.

---

## Indlæsning af json file

Inden jeg overhoved kunne få vist noget data på min hjemmeside, så har jeg brug for først at få hentet den omtalte data. For at gøre dette laver jeg en function `getPokemon()`. Det denne function gør er at den laver en `fetch request` til en hjemmeside, der indeholder vores json file. Efter at den har fået en `response`, så gemmer function dataen som json.

```JavaScript
async function getPokemon() {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = await response.json();
  return data;
}
```

Nu efter mit program har adgang til vores fælles json file, kunne jeg godt tænke mig at sortere i dem, efter deres `dexindex`. Dette gør jeg fordi at pokemons generalt er sorteret fra det laves dex nummer til det højste, og jeg kunne godt tænke mig at det samme er gældende på min hjemmeside.

Dette gøres gennem functionen `compareDexIndex(pokemonA, pokemonB)`, som der tjekker alle objekter i json filen for deres `dexindex`. Efter den har gjort dette vil den så arrangere objekterne fra lavest til højest.

```JavaScript

async function start() {
    ...
    pokemons.sort(compareDexIndex);
    ...
}

function compareDexIndex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}
```

---

## Udsende fra hjemmesiden

Efter at objekterne fra json filen er bliver sorteret vil de bliver opbygget i nogle `<article>` tags og sat ind i html'en og sorteret ud fra deres dex nummer. Nedenfor kan opbygning af det første viste element ses.

```JavaScript
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
  ...
}
```

![article med json data](/img/ampharos%20article.png "article element med json data")

Hvis man så vælger at klikke på en af de mange pokemons på hjemmesiden, vil der åbne et dialog-view. Måden hvor på at dette er muligt er ved at der laves en `EventListener` på hver `article` element der tilføjes. Nå elementet så klikkes på, kalder den en function `pokemonClicked()`, som er en nestet function i `showPokemon(pokemon)`. Denne nestet function kalder endnu en function `showPokemonModal(pokemon)`, der så gennem brugen af `.textContent` går ind og ændre de viste værdier i dialog.

```JavaScript
function showPokemon(pokemon){
    ...
     document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

    function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

```

![dialog med json data](/img/ampharos%20dialog.png "dialog element med json data")
