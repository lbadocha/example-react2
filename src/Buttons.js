import React from 'react';

const Buttons = (props) => {

    console.log(props)
    return (
        <div className="buttons">
           <button onClick={()=>{props.updateMethod('Tekst jeden')}}>Wstaw text</button>
           <button onClick={()=>{props.updateMethod('Tekst dwa')}}>Wstaw text 2</button>
        </div>
    )
    
}

export default Buttons;

