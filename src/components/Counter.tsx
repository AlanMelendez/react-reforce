import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const Counter = () => {

    const  {count, increaseBy} = useCounter();
  return (
   <>
   
    <h3>
        Contador: <small>{count}</small>
    </h3>

    <div>
        <button className="p-2 bg-blue-500 rounded-xl w-20 mx-2 text-white" onClick={()=> increaseBy(+1)}>+1</button>

    
        <button className="p-2 bg-blue-500 rounded-xl w-20 mx-2 text-white" onClick={()=> increaseBy(-1)}>-1</button>
    </div>
   </>
  )
}
