import React, {Component} from 'react';
import Buttons from './Buttons';



class ChangeColor extends Component {


    constructor() {
        super();
        this.state = {
            colorClass: 'green-color'
        }
    }


    changeTextColor = (colorValue) => {
        this.setState({colorClass: colorValue})
    }


    render() {
        return(
            <div>
                <h1 className={this.state.colorClass}>Zmień kolor tekstu</h1>
                

            </div>
    
        )
    }
}

export default ChangeColor;