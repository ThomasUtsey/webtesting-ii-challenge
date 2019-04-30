import React, { Component } from 'react';
import Display from './display'

class Dash extends Component{
  state = {
    strike:0,
    ball:0,
    foul:0,
  }

  render(){
    
    return(
      
      <div>
      <Display counts={this.state}/>
      <form onSubmit={this.handleSubmit}>
      <button name='strike' onClick={
        this.state.strike === 4? this.setState({strike:0,ball:0,foul:0}):
        this.clickEvent}>Add-Strike</button>
      <button name='ball' onClick={
        this.state.ball === 5? this.setState({strike:0,ball:0,foul:0}):
        this.clickEvent}>Add-Ball</button>
      <button name='foul'onClick={this.handlefoul}>Add-Foul</button>
      
      </form>
      <button name='Hit'onClick={this.handlehit}>Hit-Reset</button>
      </div>
    )
  }
  handlehit = (e) => this.setState({strike:0,ball:0,foul:0})

  handleSubmit = (e) => e.preventDefault()

  handlefoul = (e) => {if(this.state.strike<2){
    this.setState({strike: this.state.strike + 1,foul:this.state.foul + 1})
  }else{
    this.setState({foul:this.state.foul+1})
  }}
  
  clickEvent = (e) => {
    const count = this.state[e.target.name]
    this.setState({[e.target.name]:count + 1 })
  }
}
export default Dash;
