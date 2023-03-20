import React from "react";
import './style.css'
export class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      cont: '',
      result: ''
    }
  }
  hand1 = (wer) => {
    this.setState({
      inputValue: wer.target.value
    })
  }
  hand2 = (wer) => {
    this.setState({
      cont: wer.target.value
    })
  }
  Onplus = () => {
    this.setState({ result: parseInt(this.state.inputValue) + parseInt(this.state.cont) })
  }
  Onminus = () => {
    this.setState({ result: parseInt(this.state.inputValue) - parseInt(this.state.cont) })
  }
  Onplus2 = () => {
    this.setState({ result: parseInt(this.state.inputValue) * parseInt(this.state.cont) })
  }
  Onminus2 = () => {
    this.setState({ result: parseInt(this.state.inputValue) / parseInt(this.state.cont) })
  }
  pras = () => {
    this.setState({ result: parseInt(this.state.inputValue) % parseInt(this.state.cont) })
  }
  render() {
    return <div className="contener">
        <h1>MINI CALCULATOR</h1>
      <div className="con">
      <input type="text"  value={this.state.inputValue} onChange={this.hand1} />
      <input type="text" value={this.state.cont} onChange={this.hand2} />
      <span className="ravno">=</span>
      <span className="result">{this.state.result}</span>
      </div>
      <div className="lut">
      <button className="plus" onClick={this.Onplus}>+</button>
      <button className="plus" id="minus"  onClick={this.Onminus}>-</button>
      <button className="plus" id="razdel"  onClick={this.Onplus2}>*</button>
      </div>
      <div className="dad">
      <button className="plus"  onClick={this.Onminus2}>/</button>
      <button className="plus"  onClick={this.pras}>%</button>
      </div>
    </div>
  }
}