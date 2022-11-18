import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App'



// used localStorage for redux persist, if want to remove the persist, please check it here: https://github.com/rt2zz/redux-persist .
render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
