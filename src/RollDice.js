import React from 'react';
import Die from './Die';

const randomize = ()=> Math.ceil(Math.random()*6);
class RollDice extends React.Component{
  state={
    first:randomize(),
    second:randomize(),
  }
  roll = () =>{
    console.log("Im on a roll!")
    let first = randomize();
    let second= randomize();
    this.setState({first,second});
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
