import { render } from '@testing-library/vue';
import LoremIpsum from './LoremIpsum.vue';

test('should not throw exception', () => {
  expect(() => render(LoremIpsum)).not.toThrow();
});
