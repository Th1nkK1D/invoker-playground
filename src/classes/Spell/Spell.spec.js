import Spell from './Spell';
import { quas, wex } from '../../mock/mockedOrbs';
import { emp } from '../../mock/mockedSpells';

const name = 'Tornado';
const requiredOrbs = [quas, wex, wex];

const tornado = new Spell(name, requiredOrbs);

test('should initialize with name', () => {
  expect(tornado.name).toBe(name);
});

test('should initialize with required orbs', () => {
  expect(tornado.requiredOrbs).toStrictEqual(requiredOrbs);
});

test('should initialize icon with empty string if not provided', () => {
  expect(tornado.icon).toBe('');
});

test('should initialize icon with provided icon', () => {
  const spellWithIcon = new Spell('someSpell', [], 'icon');

  expect(spellWithIcon.icon).toBe('icon');
});

describe('isFulFilledWith method', () => {
  test('should return true with required orb matche the given parameter', () => {
    expect(tornado.isFulFilledWith([quas, wex, wex])).toBeTruthy();
  });

  test('should return true with required orb matche the given parameter without ordered', () => {
    expect(tornado.isFulFilledWith([wex, quas, wex])).toBeTruthy();
  });

  test('should return false with required orb unmatched the given parameter', () => {
    expect(tornado.isFulFilledWith([quas, quas, wex])).toBeFalsy();
  });
});

describe('isEqualTo method', () => {
  test('should return true if name is matched', () => {
    expect(tornado.isEqualTo(tornado)).toBeTruthy();
  });

  test('should return false if name is not match', () => {
    expect(tornado.isEqualTo(emp)).toBeFalsy();
  });
});
