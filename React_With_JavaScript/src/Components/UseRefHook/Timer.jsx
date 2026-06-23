import { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    const timerRef = useRef(null);

    useEffect( () => {

        timerRef.current = setInterval( () => {
            setTime(prev => prev + 1);
        },1000);

        return () => {
            clearInterval(timerRef.current);
        }

    })
  return (
    <div>
        <h1>Timer : { time } </h1>
        <button onClick={() => clearInterval(timerRef.current)}>ClearTimer</button>
    </div>
  )
}

export default Timer