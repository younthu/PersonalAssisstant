import React from 'react';
import { render } from 'react-dom';
import TodoApp from './todos'
import './index.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './todos/reducers'
import { FloatButton, Rate} from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined} from '@ant-design/icons';
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
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const Rates = () => (
  <>
    <Rate defaultValue={2} character={({index}) => index + 1 } />
    <br />
    <Rate defaultValue={3} character={({index}) => customIcons[index + 1]} />
    <br />
    <Rate allowHalf defaultValue={2.5} />    
    <br />
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);
// used localStorage for redux persist, if want to remove the persist, please check it here: https://github.com/rt2zz/redux-persist .
render(<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <div>
        <Rates />
          <TodoApp />
          <FloatButton onClick={() => console.log('click')} />
        </div>
        </PersistGate>
</Provider>, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
