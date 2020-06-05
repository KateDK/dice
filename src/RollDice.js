import React from 'react';
import Die from './Die';
import './RollDice.css'

const randomize = ()=> Math.floor(Math.random()*6);

const faces = ['one','two','three','four','five','six'];

class RollDice extends React.Component{
  state={
    first:'one',
    second:'one',
    rolling: false,
  }
  componentDidMount(){
    let first = randomize();
    let second= randomize();
    this.setState({first:faces[first],second:faces[second]})
  }

  roll = () =>{
    let first = randomize();
    let second= randomize();
    this.setState({rolling:true})
    setTimeout(()=>this.setState({first:faces[first],second:faces[second], rolling:false}),1000);
  }

  render(){
    const {first,second, rolling} =this.state;
    return(
      <div className="RollDice">
        <div className="RollDice_diceHolder">
          <Die face={first} rolling={rolling}/>
          <Die face={second} rolling={rolling}/>
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
