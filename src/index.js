import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store/store';
import { Provider } from 'react-redux';
import Container from './container/Container.js';

// import configureAppStore from './Store/store';
// import * as actions from './Action/types'
// import { nextButton, prevButton } from './Action/action';

// const store = configureAppStore()
// console.log(store);
// store.subscribe(()=>{
//   console.log('store changed', store.getState());
// })
// store.dispatch(nextButton({description: 'next'}))
// store.dispatch(prevButton())
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
  <div className="App">
   <Container/>
  </div>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
