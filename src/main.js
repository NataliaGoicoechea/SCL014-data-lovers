import { filterData, orderHouse, orderWand } from './data.js';
import data from './data/potter/potter.js';
//Se guarda toda la tada en la variable AllData
const allData = data;

// Agregando un evento click al botón entrar
document.getElementById('buttonIn').addEventListener('click', showPrincipalScreen);

// Ocultar y mostrar pantallas e imprimir el nombre del usuario en html
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
  document.getElementById('grid').innerHTML = ''; // Limpiar la grilla antes de mostrar los nuevos elementos
  let characters = ''; // declarando variable de tipo string vacía
  for (const harryPotter in data) { // Se crea un for con la variable harryPotter el cual recorre el valor Data
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters =
      `<img class='shield' src='${data[harryPotter].shield}'>
      <div style='display:flex;margin:0px;width:100%'>
          <div class='card-left'>
            <h3 id='nameCharacter'>${data[harryPotter].name} <hr></h3>
            <div class='box-icon'>
              <div class='patronus'>
                <img class="icon" src="images/smoke.svg">
                <p>Patronus</p>
                <div class='font'>${data[harryPotter].patronus}</div>
              </div>
              <div class='patronus'>
                <img class="icon" src="images/hat.svg">
                <p>Casa de Estudios</p>
                <div class='font'>${data[harryPotter].house}</div>
              </div>
              <div>
                <img class="icon" src="images/wizard.svg">
                <p>Varita</p>
                <div class='font'>${data[harryPotter].wand.wood}</div>
              </div>
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

//Selecciona filtro
document.getElementById('selectbox').onchange = function () { // Llamando al id selectBox y ejecuta la función
 let selection = document.getElementById('selectbox').value; // Selecciona el valor seleccionado en las opciones de la caja.
 let filterResult = filterData(selection);  // a filterResult le estamos asignando el valor de filterData que es la función que contiene los filtros en data.js
 showCharacters(filterResult); // Muestra resultados que trae la función seleccionada
 document.getElementById('houseFilter').classList.add('not-visible'); // Deja por defecto sin estar visible el segundo select (selección de casas).
 document.getElementById('wandsFilter').classList.add('not-visible');
 document.getElementById('houseFilterSelect').value = 'all'; // Al segundo filtro de casa de estudios le estamos diciendo que comience mostrando todos los personajes(all)
 if (selection == 'studyHouse') { // Si la variable selection es igual a studyHouse, me muestre el figuiente filtro (casas de estudio)
   document.getElementById('houseFilter').classList.remove('not-visible');
  } 
  else { // Si no es asi y es wands, me muestre el segundo filtro de varitas
   if (selection == 'wands') {
    document.getElementById('wandsFilter').classList.remove('not-visible');
   }
 }
 };
// Función que ejecuta el segundo filtro de casa de estudios
document.getElementById('houseFilterSelect').onchange = function () {
  let selection = document.getElementById('houseFilterSelect').value;
  let houseFilterData = orderHouse(selection);
  showCharacters(houseFilterData);
};
// Función que ejecuta el segundo filtro de varitas
document.getElementById('wandSelect').onchange = function() {
  let selection = document.getElementById('wandSelect').value;
  let wandsFilterData = orderWand(selection);
  showCharacters(wandsFilterData);
};



/* Buscador 
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */