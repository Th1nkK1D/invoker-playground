import { render } from '@testing-library/vue';
import SpellBar from './SpellBar.vue';
import { emp } from '../../mock/mockedSpells';

test('should not throw exception', () => {
  expect(() => render(SpellBar)).not.toThrow();
});

test('should show press space to start if spell prop is null', () => {
  const { container } = render(SpellBar);

  expect(container).toHaveTextContent('Press space to start');
});

test('should show spell name if spell prop is not null', () => {
  const { container } = render(SpellBar, {
    props: { spell: emp },
  });

  expect(container).toHaveTextContent(emp.name);
});

test('should not show any icon if spell prop is null', () => {
  const { queryByRole } = render(SpellBar);

  expect(queryByRole('img')).toBeNull();
});

test('should show spell icon if spell prop is null', () => {
  const { queryByRole } = render(SpellBar, {
    props: { spell: emp },
  });

  const iconImg = queryByRole('img');

  expect(iconImg.getAttribute('src')).toBe(emp.icon);
  expect(iconImg.getAttribute('alt')).toBe(emp.name);
});
