import React from 'react';
import { render } from 'react-dom';
import TodoApp from './todos'
import './index.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './todos/reducers'

const store =  createStore(reducer);// a normal Redux store

// const proxyStore = new Store();
// const store = createStore(rootReducer)
// wait for the store to connect to the background page
// proxyStore.ready().then(() => {
    console.log("proxy store ready.")
    render(<Provider store={store}><TodoApp /></Provider>, window.document.querySelector('#app-container'));
// });
if (module.hot) module.hot.accept();
