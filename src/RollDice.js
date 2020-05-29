import React from 'react';
import Die from './Die';

const randomize = ()=> Math.ceil(Math.random()*6);
class RollDice extends React.Component{
  state={
    first:randomize(),
    second:randomize(),
  }
  render(){
    return(
      <div className="RollDice">
        <Die/>
        <Die/>
        <div>
          <button>Roll'em</button>
        </div>
      </div>
    )
  }
}


export default RollDice;
