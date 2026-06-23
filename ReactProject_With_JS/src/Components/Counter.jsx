import React, { useState } from 'react';
import '../style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount( count + 1 );
  }

  
  const handleDecrementClick = () => {
    if(count > 0){
      setCount( count - 1 );
    }
  }


  return (
    <div className='container'>
      <div>
        <h1 className='number'> {count} </h1>
      </div>

      <div className="btns-container">
        <button className='btn' onClick={handleIncrementClick}>+</button>
        <button className='btn' onClick={handleDecrementClick}>-</button>
      </div>
    </div>
  )
}

export default Counter