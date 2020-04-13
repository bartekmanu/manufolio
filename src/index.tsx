import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
