import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TextApp from './components/textChange';

const users = [
  {
    name: 'Roman',
    age:  '23',
    sex:  'male',
    active: true
  },
  {
    name: 'Zoreslav',
    age:  '30',
    sex:  'male',
    active: true
  },
  {
    name: 'Valeriia',
    age:  '22',
    sex:  'female',
    active: false
  }
];

ReactDOM.render(
  <>
  <TextApp />
  <App users={users}/>
  </>,
  document.getElementById('root')
);