import React from 'react';


const Heading = props => {

    console.log(props);

    return <h2 className={props.classValue}>{props.headingText}</h2>
}

export default Heading;