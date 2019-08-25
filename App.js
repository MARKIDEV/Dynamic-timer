

import React, { Component } from 'react';
import './App.css';
import TimerDynamic from './TimerDynamic.js';

export default class App extends Component {
  
  render() {
    
    return (
      
        <div className="App">

        
        <h3 className=" timeinitial">Input your desired time</h3>
      
      <TimerDynamic/>
      
    </div>
    
    )
  }
}
