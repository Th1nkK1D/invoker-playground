module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['./src/jest.setup.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
