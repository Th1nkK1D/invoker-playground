import { render } from '@testing-library/vue';
import SkillBar from './SkillBar.vue';
import Skill from '../../classes/Skill/Skill';
import Orb from '../../classes/Orb/Orb';

const wex = new Orb('wex', 'w');
const emp = new Skill('EMP', [wex, wex, wex], 'empIcon');

test('should not throw exception', () => {
  expect(() => render(SkillBar)).not.toThrow();
});

test('should show press space to start if skill prop is null', () => {
  const { container } = render(SkillBar);

  expect(container).toHaveTextContent('Press space to start');
});

test('should show skill name if skill prop is not null', () => {
  const { container } = render(SkillBar, {
    props: { skill: emp },
  });

  expect(container).toHaveTextContent(emp.name);
});

test('should not show any icon if skill prop is null', () => {
  const { queryByRole } = render(SkillBar);

  expect(queryByRole('img')).toBeNull();
});

test('should show skill icon if skill prop is null', () => {
  const { queryByRole } = render(SkillBar, {
    props: { skill: emp },
  });

  const iconImg = queryByRole('img');

  expect(iconImg.getAttribute('src')).toBe(emp.icon);
  expect(iconImg.getAttribute('alt')).toBe(emp.name);
});
