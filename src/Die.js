import React from 'react';
import './Die.css'

const Die = (props)=>{
  const {face, rolling} = props;
  const cName = rolling ? "Die rolling" : "Die"
  return <i className={`${cName} fas fa-dice-${face}`}></i>

}


Die.defaultProps={
  num: 'one'
}
export default Die;
