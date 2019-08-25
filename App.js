

import React, { Component } from 'react';
import './App.css';
import TimerDynamic from './TimerDynamic.js';

export default class App extends Component {
  state = {
    hours: "00",
    seconds: "00",
    mins: "00",
    time: "5000",
    clicked:'false'
  };
  render() {
    
    return (
      <div>
        <div className="App">
      <div className="timeinitial">
        
        <h3>Input your desired time</h3>
        <input type="number"   onChange={this.handleChange}/>
         </div>
      <TimerDynamic time={this.state.time}/>
      
    </div>
      </div>
    )
  }
}
