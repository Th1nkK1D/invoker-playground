import { render } from '@testing-library/vue';
import ModelScene from './ModelScene.vue';

test('should not throw exception', () => {
  expect(() => render(ModelScene)).not.toThrow();
});
