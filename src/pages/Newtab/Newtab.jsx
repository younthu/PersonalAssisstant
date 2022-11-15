import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoApp></TodoApp> */}
        <h6>The color of this paragraph is defined using SASS.</h6>
      </header>
    </div>
  );
};

export default Newtab;
