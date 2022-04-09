import React, {useState, Component} from "react";
import Form from "./form";
import '../css/game-stlye.css';

import prizeDetail from '../images/prize_detail.png'

function ScratchForm () {

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

export default ScratchForm;