import { useState } from "react"

export const useCounter = () =>{
    const [count , setCount] = useState(10);

    const increaseBy = (value:number) => {
        setCount(Math.max(value + count,0));
    }


    return {
        
        //Properties
        count,
        
        //actions
        increaseBy
    }
}