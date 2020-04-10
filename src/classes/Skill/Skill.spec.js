import Skill from './Skill';
import Orb from '../Orb/Orb';

const quas = new Orb('Quas', 'q');
const wex = new Orb('Wex', 'w');

const name = 'Tornado';
const requiredOrbs = [quas, wex, wex];

const tornado = new Skill(name, requiredOrbs);

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
  const skillWithIcon = new Skill('someSkill', [], 'icon');

  expect(skillWithIcon.icon).toBe('icon');
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
