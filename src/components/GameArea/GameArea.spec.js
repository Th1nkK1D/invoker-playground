import { render, fireEvent } from '@testing-library/vue';
import GameArea from './GameArea.vue';
import Skill from '../../classes/Skill/Skill';
import Orb from '../../classes/Orb/Orb';
import keycode from '../../data/keycode.json';

async function simulateKeyPress(code) {
  window.event = { keyCode: code };
  await fireEvent.keyPress(window, { code });
}

const wex = new Orb('wex', 'w');
const emp = new Skill('EMP', [wex, wex, wex], 'empIcon');

test('should not throw exception', () => {
  expect(() => render(GameArea)).not.toThrow();
});

test('should show press space to start in skill bar on start', () => {
  const { queryByTestId } = render(GameArea);

  expect(queryByTestId('skillBar')).toHaveTextContent('Press space to start');
});

test('should show skill after pressing space', async () => {
  const { queryByTestId } = render(GameArea, {
    props: {
      skills: [emp],
    },
  });

  await simulateKeyPress(keycode.space);

  expect(queryByTestId('skillBar')).toHaveTextContent(emp.name);
});
