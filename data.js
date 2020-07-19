function orderAToZ(allData) {
  return allData.sort((a, b) => a.name.localeCompare(b.name));
// Llama a la función y le envía toda la data con un sort de a a-z
}

export function orderHouse(allData, houseSelected) {
  const selectedHouse = allData.filter(character => character.house.includes(houseSelected)); // Incluye el nombre de la casa selec
  const allHouses = allData.filter(character => character.house);
  if (houseSelected !== 'all') {
    return selectedHouse;
  }
  return allHouses;
}

export function orderWand(allData, wandSelected) {
  const selectedWand = allData.filter(character => character.wand.core.includes(wandSelected));
  const allWands = allData.filter(character => character.wand.core);
  if (wandSelected !== 'all') {
    return selectedWand;
  }
  return allWands;
}

export function filterData(allData, selection) {
  let result = [];
  switch (selection) { // Función de control de flujo de dato
    case 'az': result = orderAToZ(allData);// ejecuta la función
      break;// no continúa recorriendo la finción y ejecuta orderAll
    case 'studyHouse': result = orderHouse(allData, 'all');
      break;
    case 'wands': result = orderWand(allData, 'all');
      break;
    default: result = allData;
  }
  return result;
}
