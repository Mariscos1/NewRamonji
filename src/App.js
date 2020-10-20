import React from 'react';
import logo from './logo.svg';
import './App.css';
import NB from './NavBar.js'
import {BrowserRouter} from 'react-router-dom'
import Main from './Main.js'
import { Link } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <p id = "frontTitle" ><Link to= '/'> Ramonji / ラモーンジ </Link></p>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;

// <iframe scrolling = "no" src="https://docs.google.com/document/d/e/2PACX-1vToqcBb4fUNUfHtsCrsO_4Fx5lgIAeR6RODUIiVHE3WrnI82N24kfpZmFCuWb0SLj2tj44GgjDxj7b8/pub?embedded=true"></iframe>
