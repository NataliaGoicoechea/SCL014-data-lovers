import data from './data/potter/potter.js';
// import { characters } from './data.js';

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

/* Buscador
const find = '';
document.getElementById('search').onclick = function buscador() {
  location.href = document.getElementById('search-container').value;
  document.getElementById('search').innerHTML = find;
}; */

// Variable que muestra todos los personajes en la página principal
const allCharacters = document.getElementById('grid'); // llamando al ID del html dentro d ela variable allcharacters

//Se inicia función guardada en la constante showCharacters y se le envía un parámetro Data, lo que permite
//Decidir que se quiere mostrar o pedir.
const showCharacters = (data) => {
  let characters = ''; // declarando variable de tipo string
  //hace un for each, tomando como constante harryPotter(puede ser cualquiera) y recorriendo el valor Data
  //qu se le envió.
  for (const harryPotter in data) {
    const card = document.createElement('article'); // a la variable card le estamos asignando el elemento article
    allCharacters.appendChild(card); // card es el hijo de allcharacters
    card.setAttribute('class', 'card'); // le estamos añadiendo un atributo class a article ,luego html dinámico, se esta concatenando la data con los elementos html
    characters =
      `<div style='display:flex;margin:0px;width:100%'>
        <div style='width:50%;height:100%;text-align:center'>
          <h3 id='nameCharacter'>${data[harryPotter].name} <hr></h3>
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
          <img class='img-card' src='${data[harryPotter].image}'>
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

// Selecciona caja de opciones y al momento en que cambia ejecuta una función de filtro.
document.getElementById('selectbox').onchange = function () {

//selecciona el valor seleccionado en las opciones de la caja.
  let selection = document.getElementById('selectbox').value;
  //deja por defecto sin estar visible la caja de selección de casas.
  document.getElementById('houseFilter').classList.add('not-visible');
  document.getElementById('houseFilterSelect').value = 'all';

  //Si se selecciona "All"
  if (selection == 'all') {
    //Crea grilla vacía para reordenar elementos
    document.getElementById('grid').innerHTML = '';
    //Muestra todos los elementos
    showCharacters(allData.sort());
  }

  //Si se selecciona "az"
  else if (selection == 'az') {
    //Crea grilla vacía para reordenar elementos
    document.getElementById('grid').innerHTML = '';
    //Llama a la función y le envía toda la data con un sort de a a-z
    showCharacters(allData.sort((a, z)=>{
      //la función devuelve una comparación entre un elemento y otro, si uno es mayor devuelve un 1
      //y si es menor devuelve un -1 (es un if, else resumido llamado operador ternario). Asi va ordenado
      //comparando dos elementos para ir dejando los menores (mas cercanos a z) al final.
      return (a.name > z.name) ? 1: -1;
    }));
  }

  //Si se selecciona Casa de estudio
  else if (selection == 'studyHouse') {
    //Se elimina el display none y se hace aparecer la caja de selección de casa
    document.getElementById('houseFilter').classList.remove('not-visible');
    //Ejecuta una función al cambiar el valor de selección de la caja de casas
    document.getElementById('houseFilterSelect').onchange = function () {
      //Toma el valor de la caja de selección de casa y lo guarda en la variable SelectionHouse
      let selectionHouse = document.getElementById('houseFilterSelect').value;
      //Filtra la data denominada "HarryPotter" seleccionando la casa e incluyendo la variable de 
      // de la casa seleccionada (SelectionHouse) y lo guarda en SelectedHouse
      let selectedHouse = allData.filter(harryPotter => harryPotter.house.includes(selectionHouse));
      //Crea grilla vacía para reordenar elementos
      document.getElementById('grid').innerHTML = '';
      //Llama a la función para mostrar los datos y le envía el valor filtrado.
      showCharacters(selectedHouse);
    }
  } 
  //Si se selecciona Patronus
  else if (selection == 'patronus') {
    //Filtra solo los objetos que tengan el valor Patronus con algún animal
    let patronus = allData.filter(harryPotter => harryPotter.patronus);
    //Crea grilla vacía para reordenar elementos
      document.getElementById('grid').innerHTML = '';
      //llama a la función para mostrar los datos filtrando por patronus.
      showCharacters(patronus);

  }
  //SI se selecciona Varitas
  else if (selection == 'theWands') { 
    document.getElementById('houseFilter').classList.add('not-visible');
    document.getElementById('wands').classList.remove('not-visible');
    document.getElementById('selectWand').onchange = function () {
    let selectWand = document.getElementById('selectWand').value;
    
      //Filtra solo los objetos que tengan varitas, pero como todos los personas tienen mas caracteristicas 
    //dentro de varias, entonces aparecía que todos tenían varitas (hasta el gato), entonces se debe seleccionar
    //un elemento interno de varitas (madera en este caso), si está vacío no muestra al personaje, ya que todo
    //personaje que tenga varita tendrá de un tipo de madera. 
    let wands = allData.filter(harryPotter => harryPotter.wand.core.includes(wands));

      //Crea grilla vacía para reordenar elementos
      document.getElementById('grid').innerHTML = '';
      //Muetra los personajes según el filtro de varitas.
      showCharacters(wands);
    }
    
      

  }

};


//Iniciar función para mostrar todos los personajes al ingresar:
//Se debe poner al final de la función luego que esta se construye
showCharacters(allData);

// TRAER TODOS LOS PERSONAJES E IMPRIMIRLOS EN HTML
// TRAER Y GUARDAR EL BOTON (DOCUMENT)  
// DARLE EVENTO (ADDEVENTLISTENNER)
// IR A LA DAT Y RECORRERLA (FOR)
// IMPRIMIR NOMBRES EN CONSOLE.LOG
