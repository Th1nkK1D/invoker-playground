// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Invoker Playground',
  siteUrl: 'https://th1nkk1d.github.io',
  siteDescription: 'Practice make perfect, said Invoker (?)',
  titleTemplate: 'Invoker Playground',
  pathPrefix: '/invoker-playground',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'orbList',
        path: './src/data/orbs.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'spellList',
        path: './src/data/spells.json',
      },
    },
  ],
};
