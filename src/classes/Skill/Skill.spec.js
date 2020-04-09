import Skill from './Skill';
import Orb from '../Orb/Orb';

const quas = new Orb('Quas', 'q');
const wex = new Orb('Wex', 'w');

const name = 'Tornado';
const requiredOrbs = [quas, wex, wex];

const tornado = new Skill(name, requiredOrbs);

test('should initlize with name', () => {
  expect(tornado.name).toBe(name);
});

test('should initlize with required orbs', () => {
  expect(tornado.requiredOrbs).toStrictEqual(requiredOrbs);
});

describe('isFulFilledWith function', () => {
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
