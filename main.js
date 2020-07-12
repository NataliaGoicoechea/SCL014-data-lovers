import data from './data/potter/potter.js';
import { filterHouseData } from './data.js';

// Agregando un evento al botón entrar de la pantalla de bienvenida
document.getElementById('buttonIn').addEventListener('click', showPrincipalScreen);

// Ocultar y mostrar pantallas e imprimir nombre de usuario en pantalla principal
function showPrincipalScreen() {
  const user = document.getElementById('name').value;
  document.getElementById('showName').innerHTML = user;
  document.getElementById('welcome').classList.add('not-visible');
  document.getElementById('principalScreen').classList.remove('not-visible');
  document.getElementById('header').classList.remove('not-visible');
  document.getElementById('footer').classList.remove('not-visible');
}

// Variable que va a buscar toda la data de los personajes y los imprime en la página principal
const allCharacters = document.getElementById('grid'); // llamando al ID grid dentro de la variable allcharacters
function showCharacters() {
  let characters = ''; // declarando variable de tipo string
  for (let i = 0; i < data.length; i++) { // Ir a la data y recorrerla
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters = 
      `<div class='border'>
      <img class='shield' src='${data[i].shield}'>
        <div style='display:flex;margin:0px;width:100%'>
        <div style='width:50%;height:100%;text-align:center'>
          <h3 id='nameCharacter'>${data[i].name} <hr></h3>
          <div class='box-icon'>
            <div>
            <img class="icon" src="images/hat.svg">
            <p>Casa de Estudios</p>
            </div>
            <div>
            <img class="icon" src="images/smoke.svg">
            <p>Patronus</p>
            </div>
            <div>
            <img class="icon" src="images/magic.svg">
            <p>Varita</p>
            </div>
          </div>
          <div>
          <button class='buttonIn' id='buttonIn'>Descubre más</button>
          </div>
        </div>
        <div id='img-card'>
        <img class='img-card' src='${data[i].image}'>
        </div>
        </div>
      </div>`;
      card.innerHTML = characters;
    }
  }
  showCharacters();

// Filtro Personajes Casa de Estudio
//const houseCharacters = data.map(function filterHouse(house,[i]))
//filterHouseData();


 // Futuro Modal que muestra al personaje a fondo.
    /*    `<div style='display:flex;margin:0px;width:100%'>
        <div style='width:50%;height:100%;text-align:center'>
        <p class='' id='nameCharacter'>${data[i].name}</p>
        <p>Patronus ${data[i].patronus} </p>
        <button class='buttonIn' id='buttonIn'>Descubre más</button>
        </div>
        <div style='width:50%;heigth:auto'>
        <img class='img-card' src='${data[i].image}'>
        </div>
        </div>`;*/
       // card.appendChild(characters); // estamos imprimiendo en html nuestro card que contiene la variable personajes

/*  Futuro Buscador
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */
