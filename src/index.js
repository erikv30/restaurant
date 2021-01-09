import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './contextAPI';

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);

