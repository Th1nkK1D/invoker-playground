import Invoker from './Invoker';
import Orb from '../Orb/Orb';
import Spell from '../Spell/Spell';

const wex = new Orb('Wex', 'w');
const emp = new Spell('EMP', [wex, wex, wex]);

const spells = [emp];

const invoker = new Invoker(spells);

test('should initialize with 3 null orbs', () => {
  expect(invoker.activeOrbs).toHaveLength(3);
  expect(invoker.activeOrbs.every(orb => orb == null)).toBeTruthy();
});

test('should initialize with spells', () => {
  expect(invoker.spells).toStrictEqual(spells);
});

test('should push orb to activeOrbs when castOrb', () => {
  invoker.castOrb(wex);

  expect(invoker.activeOrbs).toStrictEqual([null, null, wex]);
});

describe('invoke function', () => {
  test('should return null if fulfilled spell is not exist', () => {
    expect(invoker.invoke()).toBeNull();
  });

  test('should return fulfilled spell if exist', () => {
    invoker.castOrb(wex);
    invoker.castOrb(wex);
    invoker.castOrb(wex);

    expect(invoker.invoke()).toStrictEqual(emp);
  });
});
