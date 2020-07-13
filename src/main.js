import data from './data/potter/potter.js';
import { characters } from './data.js';
//Se guarda toda la tada en la constante AllData
const allData = data;

// Agregando un evento al botón entrar
document.getElementById('buttonIn').addEventListener('click', showPrincipalScreen);

// Ocultar y mostrar pantallas
function showPrincipalScreen() {
  const user = document.getElementById('name').value;
  document.getElementById('showName').innerHTML = user;
  document.getElementById('welcome').classList.add('not-visible');
  document.getElementById('principalScreen').classList.remove('not-visible');
  document.getElementById('header').classList.remove('not-visible');
  document.getElementById('footer').classList.remove('not-visible');
}

// Función que muestra todos los personajes en la página principal
const allCharacters = document.getElementById('grid'); // llamando al ID del html dentro de la variable allcharacters
const showCharacters = (data) => { //Se inicia función guardada en la constante showCharacters y se le envía un parámetro Data, lo que permite decidir que se quiere mostrar o pedir.
  let characters = ''; // declarando variable de tipo string
  for (const harryPotter in data) { // Se crea un for con la variable harryPotter el cual recorre el valor Data
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters =
      `<div style='display:flex;margin:0px;width:100%'>
        <img class='shield' src='${data[harryPotter].shield}'>
        <div style='width:50%;height:100%;text-align:center'>
          <h3 id='nameCharacter'>${data[harryPotter].name} <hr></h3>
          <div class='box-icon'>
            <div>
              <img class="icon" src="images/smoke.svg">
              <p>Patronus</p>
            </div>
            <div>
            <img class="icon" src="images/hat.svg">
            <p>Casa de Estudios</p>
           </div>
            <div>
              <img class="icon" src="images/wizard.svg">
              <p>Varita</p>
            </div>
          </div>
          <div>
            <button class='buttonIn' id='buttonIn'>Descubre más</button>
          </div>
        </div>
        <div id='img-card'>
          <img class='img-card' src='${data[harryPotter].image}'>
        </div>
      </div>`;
      card.innerHTML = characters;
    }
  }
 ; 
showCharacters(allData);
characters(allData);
/* Buscador
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */

 /*  Futuro modal que muestra al personaje a fondo
      `<div style='display:flex;margin:0px;width:100%'>
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
 