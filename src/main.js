// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from './layouts/Default.vue';

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    property: 'og:image',
    content: 'https://th1nkk1d.github.io/invoker-playground/og/cover.png',
  });
}
