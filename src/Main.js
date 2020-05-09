import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import GenericLevel from './GenericLevel'
import {Component} from 'react'
import Kana from './Kana'

class Main extends Component{

  render(){
    
    let genericOne = <GenericLevel levelNumber="One"/>;
    let genericTwo = <GenericLevel levelNumber="Two"/>;
    let genericThree = <GenericLevel levelNumber="Three"/>;
    let genericFour = <GenericLevel levelNumber="Four"/>;

    let hiragana = <Kana kanaType="Hiragana"/>;


    return(
      <main>
        <Switch>
          <Route exact path= '/' component={Home}></Route>
          <Route path= '/Hiragana' render={() => hiragana}></Route>
          <Route path= '/Level1' render={() => genericOne}></Route>
          <Route path= '/Level2' render={() => genericTwo}></Route>
          <Route path= '/Level3' render={() => genericThree}></Route>
          <Route path='/Level4' render={() => genericFour}></Route>
        </Switch>
      </main>
    )
  }
}

export default Main;
