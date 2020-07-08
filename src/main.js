import data from './data/potter/potter.js';
import { characters } from './data.js';

//variable que muestra todos los personajes en la página principal

const allCharacters = document.getElementById('root'); //llamando al ID del html dentro d ela variable allcharacters
function showCharacters(){ 
    let characters = ''; //declarando variable de tipo string
     for (let i = 0; i < data.length; i++){
     let card = document.createElement('article'); //a la variable card le estamos asignando el elemento article
     card.setAttribute('class','card'); // le estamos añadiendo un atributo class a article
     allCharacters.appendChild(card); //card es el hijo de allcharacters
     characters = //html dinámico, se esta concatenando la data con los elementos html
     `<p class='' id=''>hola ${data[i].name}</p>
     <p>Patronus: ${data[i].patronus} </p>
     <img src='${data[i].image}'>`;
     card.innerHTML = characters; //estamos imprimiendo en html nuestro card que contiene la variable personajes
    }; 
};

console.log(showCharacters());

// TRAER TODOS LOS PERSONAJES E IMPRIMIRLOS EN HTML
// TRAER Y GUARDAR EL BOTON (DOCUMENT)  
// DARLE EVENTO (ADDEVENTLISTENNER)
// IR A LA DAT Y RECORRERLA (FOR)
// IMPRIMIR NOMBRES EN CONSOLE.LOG