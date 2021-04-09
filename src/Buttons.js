import React from 'react';

const Buttons = (props) => {

    console.log(props)
    return (
        <div className="buttons">
            <button onClick={()=>{props.changeColorMethod('red-color')}}>red</button>
            <button onClick={()=>{props.changeColorMethod('green-color')}}>green</button>
            <button onClick={()=>{props.changeColorMethod('blue-color')}}>blue</button>
        </div>
    )
    
}

export default Buttons;

