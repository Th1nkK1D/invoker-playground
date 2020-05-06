import '@testing-library/jest-dom';
import SceneController from './classes/SceneController/SceneController';

jest.mock('./classes/SceneController/SceneController.js');
jest.spyOn(SceneController.prototype, 'render').mockImplementation(() => Promise.resolve());
