import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'

class NB extends Component{
  render(){
    return(
      //html
      <ul className="nav-bar-con">
        <li><Link to= '/Hiragana'>Hiragana</Link></li>
        <li> <Link to= '/Level1'>Level One</Link></li>
        <li><Link to='/Level2'>Level Two</Link></li>
        <li><Link to= '/Level3'>Level Three</Link></li>
        <li><Link to= '/Level4'>Level Four</Link></li>
      </ul>
    );
  }
}
export default NB
