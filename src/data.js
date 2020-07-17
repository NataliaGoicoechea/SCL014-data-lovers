import data from './data/potter/potter.js';

// Se guarda toda la tada en la variable AllData
const allData = data;

// Funcione all y orenar de la a a la z
function orderAll() {
  return allData;
}
function orderAToZ() {
  return allData.sort((a, b) => a.name.localeCompare(b.name));
// Llama a la función y le envía toda la data con un sort de a a-z
}


export function orderHouse(houseSelected) {
  const selectedHouse = allData.filter(harryPotter => harryPotter.house.includes(houseSelected));
  const allHouses = allData.filter(harryPotter => harryPotter.house);
  if (houseSelected !== 'all') {
    return selectedHouse;
  }
  return allHouses;
}

export function orderWand(wandSelected) {
  const selectedWand = allData.filter(harryPotter => harryPotter.wand.core.includes(wandSelected));
  const allWands = allData.filter(harryPotter => harryPotter.wand.core !== '');
  if (wandSelected !== 'all') {
    return selectedWand;
  }
  return allWands;
}

export function filterData(selection) {
  let result = [];
  switch (selection) { // Función de control de flujo de dato
    case 'az': result = orderAToZ();// ejecuta la función
      break;// no continúa recorriendo la finción y ejecuta orderAll
    case 'studyHouse' : result = orderHouse('all');
      break;
    case 'wands' : result = orderWand('all');
      break;
    default: result = orderAll();
  }
  return result;
}
