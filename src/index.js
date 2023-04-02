import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const defaultState = {
  text: '',
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'GENERATE_QR':
      return {...state, text: state.text = action.qrChange};
    default:
      return state;
  }
} 

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
