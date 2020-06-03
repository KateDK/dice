import React from 'react';
import './Die.css'

const Die = (props)=>{
  const {num, rolling} = props;
  const dieName = `fas fa-dice-${num}`
  const cName = rolling ? "Die rolling" : "Die"
  return (
  <div className={cName}>
    <i className={dieName}></i>
  </div>
  )
}


Die.defaultProps={
  num: 'one'
}
export default Die;
