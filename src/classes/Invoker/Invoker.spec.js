import Invoker from './Invoker';
import Orb from '../Orb/Orb';
import Skill from '../Skill/Skill';

const wex = new Orb('Wex', 'w');
const emp = new Skill('EMP', [wex, wex, wex]);

const skills = [emp];

const invoker = new Invoker(skills);

test('should initialize with 3 null orbs', () => {
  expect(invoker.activeOrbs).toHaveLength(3);
  expect(invoker.activeOrbs.every(orb => orb == null)).toBeTruthy();
});

test('should initialize with skills', () => {
  expect(invoker.skills).toStrictEqual(skills);
});

test('should push orb to activeOrbs when castOrb', () => {
  invoker.castOrb(wex);

  expect(invoker.activeOrbs).toStrictEqual([null, null, wex]);
});

describe('invoke function', () => {
  test('should return null if fulfilled skill is not exist', () => {
    expect(invoker.invoke()).toBeNull();
  });

  test('should return fulfilled skill if exist', () => {
    invoker.castOrb(wex);
    invoker.castOrb(wex);
    invoker.castOrb(wex);

    expect(invoker.invoke()).toStrictEqual(emp);
  });
});
