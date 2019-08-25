import React, { Component } from "react";
let time = 9999900;
let hours = Math.floor(time / (60 * 60 * 1000));
let mins = Math.floor((time - hours * 60 * 60 * 1000) / (60 * 1000));
let seconds = Math.floor(
  (time - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000
);

export default class TimerDynamic extends Component {
  render() {
    return (
      <div className="timer">
        <div>
          <p> Initial Time: {time}</p>
          <div>
            <div className="Units">
              <div>
                <p>{hours} : </p>
                <div>Hour</div>
              </div>

              <div style={{ marginLeft: "17px" }}>
                <p>{mins} : </p>
                <div>Minute</div>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <p>{seconds} </p>
                <div>Second</div>
              </div>
            </div>
            <div className="buttons">
              <button className="btn">Start</button>
              <button className="btn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
