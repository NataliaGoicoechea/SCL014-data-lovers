import { orderHouse } from '../src/data.js';


describe('oderHouse', () => {
  it('is a function', () => {
    expect(typeof orderHouse).toBe('function');
  });

  it('returns `selectedHouse`', () => {
    expect(houseSelected()).toBe('Gryffindor');
  });
});
/*
function mockData(){   // Emular un arreglo de la data con un objeto de un personaje
  let potter = [{
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    shield: './images/Gryffindor_shield.svg',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'Half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'Holly',
      core: 'Phoenix Feather',
      length: 11,
    },
    patronus: 'Stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: './images/Harry_Potter.jpg',
  }]
}*/