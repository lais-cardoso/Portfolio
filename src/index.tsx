import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes'
import GlobalStyles from './styles/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root/>
    <GlobalStyles/>
  </React.StrictMode>
);
