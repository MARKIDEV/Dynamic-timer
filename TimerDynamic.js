
import React, { Component } from 'react'


export default class TimerDynamic extends Component {
  state = {
    hours: "00",
    seconds: "00",
    mins: "00",
    time: "5000",
    clicked:'false'
  };
  constructor (props){
    super();
    this.state=props.time;
  }
  //  handleChange = event =>{
  //     this.setState ({input:event.target.value}) ;
  //   }


  // 
  
  handlechangeTime = () => {
    
    this.setState({
     
      hours: Math.floor(time / (60 * 60 * 1000)),
      mins: Math.floor((time- hours * 60 * 60 * 1000) / (60 * 1000)),
      seconds: Math.floor(
        (time - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000
        )
      })
 
  }
  render() {
  
     return (
       
        <div className="timer">
        
        
          <div className="Units">

          <div>
            <p>{this.state.hours} </p>   
            <div>Hour</div>
          </div>

          <div>:</div>

          <div>
          <p>{this.state.mins} </p>   
            <div>Minute</div>
          </div>

          <div>:</div>

          <div>
          <p>{this.state.seconds} </p>            
            <div>Second</div>
          </div>

        </div>
        <div className="buttons">
          <button onClick={() =>this.onChange()} className="btn">Start</button>
          <button className="btn">Reset</button>
        </div>
      </div>
    )
     }
}