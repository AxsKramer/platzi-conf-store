import React from 'react';
import ReactDOM from 'react-dom'
import App from './routes/App';
import AppContext from './context/AppContext';
import initialState from './initialState';

ReactDOM.render(
  <AppContext.Provider value={initialState}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
);