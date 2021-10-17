import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemesProvider} from './contexts/ThemesContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
