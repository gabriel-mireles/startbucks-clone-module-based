import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import './index.scss'
import App from './app/App';
import { store } from './app/state/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


