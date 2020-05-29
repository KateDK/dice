import React from 'react';
import Die from './Die';

class RollDice extends React.Component{
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
