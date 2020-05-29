import React from 'react';
import './Die.css'

const Die = (props)=>{
  const {num} = props;
  const cName = `fas fa-dice-${num}`
  return (
  <div className='Die'>
    <i className={cName}></i>
  </div>
  )
}


Die.defaultProps={
  num: 'one'
}
export default Die;
