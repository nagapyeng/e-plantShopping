// src/main.jsx or src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import the Redux Provider
import { Provider } from 'react-redux';

// ✅ Import the configured store
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ✅ Wrap App with Provider and pass in the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);