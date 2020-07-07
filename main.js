//llamando a la data.js
//import { characters } from './data.js';

import data from './data/potter/potter.js';
import { characters } from './data.js';

//console.log(data);

showCharacters();
function showCharacters(){
    let characters = [];
     for (let i = 0; i < data.length; i++){
        // Characters = characters + data[i];
        //console.log(data[i]);    
        characters.push(data[i]);

    }; 
    //console.log(characters);
    return characters;
};

console.log(showCharacters());

let name = showCharacters().map(function(name){
   return name.name;
});
document.getElementById('root').innerHTML = name;

/*const data = {
showCharacters = 
 for (let i = 0; i < data.length; i++){
    let name = '';

    console.log(data[i]);    
}; 
}*/

//const characters = ;

// TRAER TODOS LOS PERSONAJES E IMPRIMIRLOS EN HTML
// TRAER Y GUARDAR EL BOTON (DOCUMENT)
// DARLE EVENTO (ADDEVENTLISTENNER)
// IR A LA DAT Y RECORRERLA (FOR)
// IMPRIMIR NOMBRES EN CONSOLE.LOG