import React from 'react';
import { render } from 'react-dom';
import TodoApp from './todos'
import './index.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './todos/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store =  createStore(persistedReducer);// a normal Redux store
let persistor = persistStore(store)

// used localStorage for redux persist, if want to remove the persist, please check it here: https://github.com/rt2zz/redux-persist .
render(<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}><TodoApp /></PersistGate>
</Provider>, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
