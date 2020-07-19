import { filterData, orderHouse, orderWand } from './data.js';
import allData from './data/potter/potter.js';

// Ocultar y mostrar pantallas e imprimir el nombre del usuario en html
function showPrincipalScreen() {
  const user = document.getElementById('name').value;
  document.getElementById('showName').innerHTML = user;
  document.getElementById('welcome').classList.add('not-visible');
  document.getElementById('principalScreen').classList.remove('not-visible');
  document.getElementById('header').classList.remove('not-visible');
  document.getElementById('footer').classList.remove('not-visible');
}
// Agregando un evento click al botón entrar
document.getElementById('buttonIn').addEventListener('click', showPrincipalScreen);

// Función que muestra todos los personajes en la página principal
const allCharacters = document.getElementById('grid'); // llamando al ID del html dentro de la variable allcharacters
const showCharacters = (data) => {
// Se le envía un parámetro Data, lo que permite decidir que se quiere mostrar o pedir.
  document.getElementById('grid').innerHTML = ''; // Limpiar la grilla antes de mostrar los nuevos elementos
  let characters = '';// declarando variable de tipo string vacía
  for (let i = 0; i < data.length; i += 1) {
  // Se crea un for con la variable harryPotter el cual recorre el valor Data
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters = `<img class='shield' src='${data[i].shield}'>
    <div style='display:flex;margin:0px;width:100%'>
    <div class="card-left">
      <h3 id="nameCharacter">${data[i].name} <hr></h3>
      <div class="box-icon">
        <div class="patronus">
          <img class="icon" src="images/hat.svg">
          <p>Casa de Estudios</p>
          <div class="font">${data[i].house}</div>
        </div>
        <div class="patronus">
          <img class="icon" src="images/family.svg">
          <p>Ascendencia</p>
          <div class="font">${data[i].ancestry}</div>
        </div>
        <div class="patronus">
          <img class="icon" src="images/smoke.svg">
          <p>Patronus</p>
          <div class="font">${data[i].patronus}</div>
        </div>
      </div>
      <div Class="box-icon">
        <div class="patronus-b">
          <img class="icon" src="images/backstage.svg">
          <p>Actor</p>
          <div class="font">${data[i].actor}</div>
        </div>
        <div class="patronus-b">
        <img class="icon" src="images/wizard.svg">
        <p>Varita</p>
        <div class="font">Madera:${data[i].wand.wood}</div>
        <div class="font">Núcleo:${data[i].wand.core}</div>
        <div class="font">Longitud:${data[i].wand.length}</div>
      </div>
      </div>
    </div>
  <div id="img-card">
    <img class="img-card" src='${data[i].image}'>
  </div>
      </div>`;
    card.innerHTML = characters;
  }
};
showCharacters(filterData(allData, ''));

// Selecciona filtro
document.getElementById('selectbox').onchange = function genericFilter() { // Llamando al id selectBox y ejecuta la función
  const selection = document.getElementById('selectbox').value; // Selecciona el valor seleccionado en las opciones de la caja.
  const filterResult = filterData(allData, selection);
  // filterResult asignando el valor filterData que es la función que contiene filtros en data.js
  showCharacters(filterResult); // Muestra resultados que trae la función seleccionada
  document.getElementById('houseFilter').classList.add('not-visible'); // Deja por defecto sin estar visible el segundo select (selección de casas).
  document.getElementById('wandsFilter').classList.add('not-visible');
  document.getElementById('houseFilterSelect').value = 'all'; // Al segundo filtro de casa de estudios le estamos diciendo que comience mostrando todos los personajes(all)
  if (selection === 'studyHouse') { // Si la variable selection es igual a studyHouse, me muestre el figuiente filtro (casas de estudio)
    document.getElementById('houseFilter').classList.remove('not-visible');
  } else if (selection === 'wands') { // Si no es asi y es wands, me muestre el segundo filtro de varitas
    document.getElementById('wandsFilter').classList.remove('not-visible');
  }
};

// Función que ejecuta el segundo filtro de casa de estudios
document.getElementById('houseFilterSelect').onchange = function filterHouse() {
  const selection = document.getElementById('houseFilterSelect').value;
  const houseFilterData = orderHouse(allData, selection);
  showCharacters(houseFilterData);
};
// Función que ejecuta el segundo filtro de varitas
document.getElementById('wandSelect').onchange = function filterWands() {
  const selection = document.getElementById('wandSelect').value;
  const wandsFilterData = orderWand(allData, selection);
  showCharacters(wandsFilterData);
};
/* Buscador
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */
