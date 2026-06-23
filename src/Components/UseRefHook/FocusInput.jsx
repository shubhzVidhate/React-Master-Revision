import { useRef } from 'react'

const FocusInput = () => {
    const InputElmemnt = useRef(null);

    const handleFocusClick = () => {
        if(InputElmemnt.current){
            InputElmemnt.current.focus();
        }
    }
  return (
    <div>
        <input type="text" ref={InputElmemnt} />
        <button onClick={handleFocusClick}>Add Focus</button>
    </div>
  )
}

export default FocusInput