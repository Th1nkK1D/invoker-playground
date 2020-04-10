import { render, fireEvent } from '@testing-library/vue';
import GameArea from './GameArea.vue';
import keycode from '../../data/keycode.json';
import { emp } from '../../mock/mockedSpells';

async function simulateKeyPress(code) {
  window.event = { keyCode: code };
  await fireEvent.keyPress(window, { code });
}

test('should not throw exception', () => {
  expect(() => render(GameArea)).not.toThrow();
});

test('should show press space to start in spell bar on start', () => {
  const { queryByTestId } = render(GameArea);

  expect(queryByTestId('spellBar')).toHaveTextContent('Press space to start');
});

test('should show spell after pressing space', async () => {
  const { queryByTestId } = render(GameArea, {
    props: {
      spells: [emp],
    },
  });

  await simulateKeyPress(keycode.space);

  expect(queryByTestId('spellBar')).toHaveTextContent(emp.name);
});
