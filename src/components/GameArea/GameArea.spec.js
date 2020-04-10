import { render, fireEvent } from '@testing-library/vue';
import GameArea from './GameArea.vue';
import keycode from '../../data/keycode.json';
import { emp, tornado } from '../../mock/mockedSpells';
import { quas, wex } from '../../mock/mockedOrbs';

async function simulateKeyPress(code) {
  window.event = { keyCode: code };
  await fireEvent.keyDown(window, { code });

  return Promise.resolve();
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

test('should show same spell after invoke invalid spell', async () => {
  const { queryByTestId } = render(GameArea, {
    props: {
      spells: [emp, tornado],
      orbs: [quas, wex],
    },
  });

  await simulateKeyPress(keycode.space);

  const targetSpellName = queryByTestId('spellBar').textContent;

  await simulateKeyPress(keycode.q);
  await simulateKeyPress(keycode.q);
  await simulateKeyPress(keycode.q);

  await simulateKeyPress(keycode.r);

  expect(queryByTestId('spellBar').textContent).toBe(targetSpellName);
});

test('should show new spell after invoke valid spell', async () => {
  const { queryByTestId } = render(GameArea, {
    props: {
      spells: [emp, tornado],
      orbs: [quas, wex],
    },
  });

  await simulateKeyPress(keycode.space);

  const targetSpellName = queryByTestId('spellBar').textContent;
  const targetSpell = targetSpellName === emp.name ? emp : tornado;

  await Promise.all(targetSpell.requiredOrbs.map(orb => simulateKeyPress(keycode[orb.key])));

  await simulateKeyPress(keycode.r);

  expect(queryByTestId('spellBar')).not.toHaveTextContent(targetSpellName);
});
