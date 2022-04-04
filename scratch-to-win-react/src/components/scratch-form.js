import React, {Component} from "react";
import Form from "./form";
import '../css/game-stlye.css';
import prizeDetail from '../images/prize_detail.png'

class ScratchForm extends Component {
    render() {
        return(
            <div className="game-container form-container">
                <Form/>
                <div className="prize-container">
                <img className="prize-details" src={prizeDetail} />
                </div>
            </div>
        )
    }
}   

export default ScratchForm;