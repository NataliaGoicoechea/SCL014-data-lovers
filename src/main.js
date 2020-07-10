import data from './data/potter/potter.js';
// import { characters } from './data.js';

// Agregando un evento al botón entrar
document.getElementById('buttonIn').addEventListener('click', showPrincipalScreen);

// Ocultar y mostrar pantallas
function showPrincipalScreen() {
  const user = document.getElementById('name').value;
  document.getElementById('showName').innerHTML = user;
  document.getElementById('welcome').classList.add('not-visible');
  document.getElementById('principalScreen').classList.remove('not-visible');
  document.getElementById('header').classList.remove('not-visible');
}

/* Buscador
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */

// Variable que muestra todos los personajes en la página principal
const allCharacters = document.getElementById('grid'); // llamando al ID del html dentro d ela variable allcharacters
function showCharacters() {
  let characters = ''; // declarando variable de tipo string
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters = 
      `<div style='display:flex;margin:0px;width:100%'>
        <div style='width:50%;height:100%;text-align:center'>
          <h3 id='nameCharacter'>${data[i].name}</h3>
          <div>
            <p><img class="icon" src="images/hat.svg">Casa de Estudios</p>
            <img class="icon" src="images/smoke.svg">
            <img class="icon" src="images/magic.svg">
          </div>
          <div>
          <button class='buttonIn' id='buttonIn'>Descubre más</button>
          </div>
        </div>
        <div style='width:50%;heigth:auto'>
        <img class='img-card' src='${data[i].image}'>
        </div>
      </div>`;

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
        card.innerHTML = characters;
        // card.appendChild(characters); // estamos imprimiendo en html nuestro card que contiene la variable personajes
  }
}
showCharacters();
// TRAER TODOS LOS PERSONAJES E IMPRIMIRLOS EN HTML
// TRAER Y GUARDAR EL BOTON (DOCUMENT)  
// DARLE EVENTO (ADDEVENTLISTENNER)
// IR A LA DAT Y RECORRERLA (FOR)
// IMPRIMIR NOMBRES EN CONSOLE.LOG
