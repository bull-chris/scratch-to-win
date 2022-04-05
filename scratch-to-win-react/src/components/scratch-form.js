import React, {Component} from "react";
import Form from "./form";
import '../css/game-stlye.css';

import prizeDetail from '../images/prize_detail.png'

class ScratchForm extends Component {
    render() {
        //scratch form page
        return(
            <div className="game-container form-container">
                {/* form element */}
                <Form/>
                {/* prize details */}
                <div className="prize-container">
                <img className="prize-details" alt="Prize details" src={prizeDetail} />
                </div>
            </div>
        )
    }
}   

export default ScratchForm;