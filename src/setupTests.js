import '@testing-library/jest-dom';
global.URL.createObjectURL = jest.fn();
global.ResizeObserver = require('resize-observer-polyfill')