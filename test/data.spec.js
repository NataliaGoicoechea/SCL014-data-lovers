import { orderHouse, orderWand, filterData } from '../src/data.js';
import data from '../src/data/potter/potter.js';

describe('oderHouse', () => {
  it('is a function', () => {
    expect(typeof orderHouse).toBe('function');
  });

  it('Return number of the students of griffindor house', () => {
    expect(orderHouse(data, 'Gryffindor')).toHaveLength(11);
  });
});

describe('orderWand', () => {
  it('is a function', () => {
    expect(typeof orderWand).toBe('function');
  });

  it('Return types of wands', () => {
    expect(orderWand(data, 'Phoenix Feather')).toHaveLength(2);
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Return filter selected', () => {
    expect(filterData(data, 'az')).toHaveLength(26);
  });
});

describe('filterDataStudyHouse', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Return filter selected', () => {
    expect(filterData(data, 'studyHouse')).toHaveLength(26);
  });
});

describe('filterDataWands', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Return filter selected', () => {
    expect(filterData(data, 'wands')).toHaveLength(26);
  });
});
