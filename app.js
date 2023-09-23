const baseURL = "https://pokeapi.co/api/v2/";

let cardImg =document.querySelector(".card img");
console.log(cardImg);
let cardTitle = document.querySelector(".card-title");
console.log(cardTitle);

let cardText = document.querySelector(".card-text");
console.log(cardText);

let input = document.querySelector('input');
console.log(input);

const button = document.querySelector('button');
console.log(button);


function getPokemonData(pokemonName)
{
    let fetchedData = `${baseURL}pokemon/${pokemonName}`;
    console.log(fetchedData);
    fetch(fetchedData)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let abilities = [];
        let forms = [];

        for(let ability of data.abilities){
            abilities.push(ability.ability.name);
        }

        for (let form of data.forms){
            forms.push(form.name);          
        }

        let pokemon = {
            img:data.sprites["front_default"],
            name:data.name,
            abilities:abilities,
            forms: forms
        }

        cardTitle.textContent = pokemon.name.toUpperCase();
        cardText.innerText = `

        ${[pokemon.abilities]}

        ${pokemon.forms}
        `;
        cardImg.src = pokemon.img;
    });
}

getPokemonData("ditto");

button.addEventListener('click',function(e){
    //* if we don't have this line of code it will try to take us to another webpage
    e.preventDefault();
    console.log(input.value);
    getPokemonData(input.value.toLowerCase());
})