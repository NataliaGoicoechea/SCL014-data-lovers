import data from './data/potter/potter.js';

//Se guarda toda la tada en la variable AllData
const allData = data;

export function filterData(selection) {
 let result =  []; 
 console.log(selection);
 switch(selection){  // Función de control de flujo de dato
   case 'all': 
    result = orderAll();
     break; // Si la opción seleccionada es all, no continúa recorriendo la finción y ejecuta orderAll
     case 'az':
       result = orderAToZ(); // ejecuta la función 
       break;
        case 'studyHouse' :
          result = orderHouse('all');
          break;
            case 'wands' :
              result = orderWand('all');
              break;
 };
 return result;
};

function orderAll() {
  return allData;
};

function orderAToZ() {
  return allData.sort((a, z) => { //Llama a la función y le envía toda la data con un sort de a a-z
    //la función devuelve una comparación entre un elemento y otro, si uno es mayor devuelve un 1
    //y si es menor devuelve un -1 (es un if, else resumido llamado operador ternario). Asi va ordenado
    //comparando dos elementos para ir dejando los menores (mas cercanos a z) al final.
    return (a.name > z.name) ? 1 : -1;
  });
};

export function orderHouse(houseSelected) {
  let selectedHouse = allData.filter(harryPotter => harryPotter.house.includes(houseSelected)); //Filtra la data denominada "HarryPotter" seleccionando la casa e incluyendo la variable de la casa seleccionada (SelectionHouse) y lo guarda en SelectedHouse
  let allHouses = allData.filter(harryPotter => harryPotter.house);
      if (houseSelected != 'all') {
          return selectedHouse;
        } else {
          return allHouses;
        }
};

export function orderWand(wandSelected) {
  let selectedWand = allData.filter(harryPotter => harryPotter.wand.core.includes(wandSelected));
  let allWands = allData.filter(harryPotter => harryPotter.wand.core != '');
    if (wandSelected != 'all') {
      return selectedWand;
    } else {
      return allWands;
    }
};