import React from 'react';
import Die from './Die';
import './RollDice.css'

const randomize = ()=> Math.ceil(Math.random()*6);

class RollDice extends React.Component{
  state={
    first:randomize(),
    second:randomize(),
    rolling: false,
  }
  roll = () =>{
    let first = randomize();
    let second= randomize();
    this.setState({rolling:true})
    setTimeout(()=>this.setState({first,second, rolling:false}),1000);
  }

  render(){
    const dice = ['one','two','three','four','five','six'];
    const {first,second, rolling} =this.state;
    return(
      <div className="RollDice">
        <div className="RollDice_diceHolder">
          <Die num={dice[first+1]} rolling={rolling}/>
          <Die num={dice[second+1]} rolling={rolling}/>
        </div>
        <div>
          {rolling ?
          <button disabled className='RollDice_button'>Rolling..</button> :
          <button className='RollDice_button' onClick={this.roll}>Roll'em!</button>
          }
        </div>
      </div>
    )
  }
}


export default RollDice;
