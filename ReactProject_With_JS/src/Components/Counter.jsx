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
    <div className='container-counter'>
      <div>
        <h1 className='number-counter'> {count} </h1>
      </div>

      <div className="btns-container-counter">
        <button className='btn-counter' onClick={handleIncrementClick}>+</button>
        <button className='btn-counter' onClick={handleDecrementClick}>-</button>
      </div>
    </div>
  )
}

export default Counter