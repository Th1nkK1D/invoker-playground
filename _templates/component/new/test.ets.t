---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.spec.js
---
import { render } from '@testing-library/vue';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>.vue';

test('should not throw exception', () => {
  expect(() => render(<%= h.changeCase.pascal(name) %>)).not.toThrow();
});
