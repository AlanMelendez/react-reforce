import { useState } from "react";

/* eslint-disable @typescript-eslint/no-wrapper-object-types */
export const StateFunction = () => {
    
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }

    const setDislike = () => {
        setLikes(likes - 1);
    }
    

    return (
        <>
            <h2 className="text-3xl font-bold underline">Basic Function with state</h2>

            <button onClick={handleClick}>Like
            : {likes}
            </button>


            <button onClick={setDislike}>
                Dislike
            : {likes}
            </button>
        </>
    )
}