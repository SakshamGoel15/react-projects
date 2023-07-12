// * 1) Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// * 2) get a reference to the root component
const el = document.getElementById('root');

//  * 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// * 4) show the react component on the screen
root.render(<App/>);