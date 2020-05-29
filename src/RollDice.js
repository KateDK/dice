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
    const dice = ['one','two','three','four','five','six'];
    const {first,second} =this.state;
    return(
      <div className="RollDice">
        <Die num={dice[first+1]}/>
        <Die num={dice[second+1]}/>
        <div>
          <button onClick={this.roll}>Roll'em</button>
        </div>
      </div>
    )
  }
}


export default RollDice;
