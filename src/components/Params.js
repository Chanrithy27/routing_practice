import React from 'react';
import { useParams } from "react-router-dom";

const Params = (props) => {
    const { word, color, bgcolor } = useParams();

    return(
        <div>

            {
                isNaN(word) ?
                <h1 style = {
                    color?
                    {color: color, backgroundColor: bgcolor}
                    :null
                }>
                    This is a word: {word}
                </h1>
                :
                <h1>
                    This is number: {word}
                </h1>
            }
        </div>
    )
}

export default Params;