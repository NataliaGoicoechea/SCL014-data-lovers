export const characters = () => 'characters';

// Selecciona caja de opciones y al momento en que cambia ejecuta una función de filtro.
document.getElementById('selectbox').onchange = function () {
 let selection = document.getElementById('selectbox').value; // Selecciona el valor seleccionado en las opciones de la caja.
 document.getElementById('houseFilter').classList.add('not-visible'); // Deja por defecto sin estar visible la caja de selección de casas.
 document.getElementById('wandsFilter').classList.add('not-visible');
 document.getElementById('houseFilterSelect').value = 'all'; 
  if (selection == 'all') { // Si se selecciona "All"
    document.getElementById('grid').innerHTML = ''; // Crea grilla vacía para reordenar elementos
    showCharacters(allData.sort()); //Muestra todos los elementos
}
  //Si se selecciona "az"
  else if (selection == 'az') {
    document.getElementById('grid').innerHTML = ''; //Crea grilla vacía para reordenar elementos
    showCharacters(allData.sort((a, z) => { //Llama a la función y le envía toda la data con un sort de a a-z
        //la función devuelve una comparación entre un elemento y otro, si uno es mayor devuelve un 1
        //y si es menor devuelve un -1 (es un if, else resumido llamado operador ternario). Asi va ordenado
        //comparando dos elementos para ir dejando los menores (mas cercanos a z) al final.
        return (a.name > z.name) ? 1 : -1;
      }));
    }
  
    //Si se selecciona Casa de estudio
    else if (selection == 'studyHouse') {
      document.getElementById('houseFilter').classList.remove('not-visible'); //Se elimina el display none y se hace aparecer la caja de selección de casa
      document.getElementById('houseFilterSelect').onchange = function () { //Ejecuta una función al cambiar el valor de selección de la caja de casas
        let selectionHouse = document.getElementById('houseFilterSelect').value; //Toma el valor de la caja de selección de casa y lo guarda en la variable SelectionHouse
        let selectedHouse = allData.filter(harryPotter => harryPotter.house.includes(selectionHouse)); //Filtra la data denominada "HarryPotter" seleccionando la casa e incluyendo la variable de la casa seleccionada (SelectionHouse) y lo guarda en SelectedHouse
        let allHouses = allData.filter(harryPotter => harryPotter.house);
  
        if (selectionHouse != 'all') {
          document.getElementById('grid').innerHTML = ''; //Crea grilla vacía para reordenar elementos
          showCharacters(selectedHouse); //Llama a la función para mostrar los datos y le envía el valor filtrado.
        } else {
          document.getElementById('grid').innerHTML = ''; //Crea grilla vacía para reordenar elementos
          showCharacters(allHouses); //Muestra los personajes según el filtro de varitas.
        }
      }
    }
    //Si se selecciona Patronus
    else if (selection == 'patronus') {
      let patronus = allData.filter(harryPotter => harryPotter.patronus); //Filtra solo los objetos que tengan el valor Patronus con algún animal
      document.getElementById('grid').innerHTML = ''; //Crea grilla vacía para reordenar elementos
      //llama a la función para mostrar los datos filtrando por patronus.
      showCharacters(patronus);
    }
    //SI se selecciona Varitas
    else if (selection == 'wands') {
      document.getElementById('wandsFilter').classList.remove('not-visible');
      document.getElementById('selectWand').onchange = function () {
        let selectWand = document.getElementById('selectWand').value;
        //Filtra solo los objetos que tengan varitas, pero como todos los personas tienen mas caracteristicas 
        //dentro de varias, entonces aparecía que todos tenían varitas (hasta el gato), entonces se debe seleccionar
        //un elemento interno de varitas (madera en este caso), si está vacío no muestra al personaje, ya que todo
        //personaje que tenga varita tendrá de un tipo de madera. 
        let allwandsCore = allData.filter(harryPotter => harryPotter.wand.core);
        let allwandsWood = allData.filter(harryPotter => harryPotter.wand.wood);
        let allwandsCharacters = allwandsWood.concat(allwandsCore);
        let allwandsCharactersNoRepeat = allwandsCharacters.filter((item, pos) => allwandsCharacters.indexOf(item) === pos); 
        let wands = allData.filter(harryPotter => harryPotter.wand.core.includes(selectWand));
  
        if (selectWand != 'all') {
          //Crea grilla vacía para reordenar elementos
          document.getElementById('grid').innerHTML = '';
          //Muetra los personajes según el filtro de varitas.
          showCharacters(wands);
        } else {
          //Crea grilla vacía para reordenar elementos
          document.getElementById('grid').innerHTML = '';
          //Muetra los personajes según el filtro de varitas.
          showCharacters(allwandsCharactersNoRepeat);
        }
      }
    }
  };
  