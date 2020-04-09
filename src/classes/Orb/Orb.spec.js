import Orb from './Orb';

const name = 'Wex';
const key = 'w';
const wex = new Orb(name, key);

test('should intilize with name', () => {
  expect(wex.name).toBe(name);
});

test('should intilize with key', () => {
  expect(wex.key).toBe(key);
});

describe('isEqualTo method', () => {
  test('should return false if key of the given orb match', () => {
    const fakeWex = new Orb('Wex', 'f');

    expect(wex.isEqualTo(fakeWex)).toBeFalsy();
  });

  test('should return true if key of the given orb match', () => {
    expect(wex.isEqualTo(wex)).toBeTruthy();
  });
});
