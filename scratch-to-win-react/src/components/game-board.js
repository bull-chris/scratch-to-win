import React, {useState, useEffect} from "react";
import Coin from "./coin";
import uniqid from "uniqid";

function GameBoard (props) {
    //render a coin to the game board
    
    function submitAnswer(e) {
        if (document.getElementById("question").value == 4290)
            document.getElementById("correctMessage").style.display = "block";
    }

    const renderCoin = () => {
        if (props.startIndex) {
            return props.startIndex.map((id) => <Coin key={uniqid()}/>)
        }
    }
    
    //render the game board as 3x3 grid
    return(
        <div>
            <div id="winMessage">
                <h1>Congratulations! You have won a prize of BuyMore Dollars!</h1>
                <h2>Please answer this skill testing question below:</h2>
                <label htmlFor="question">What is 55 x 78?</label>
                <input type="text" id="question" name="question" placeholder="Enter your answer..."/>
                <button id="submitQuestion" onClick={(e) => submitAnswer(e)}>Submit Answer</button>
                <h2 id="correctMessage">Thank you. Your BuyMore Dollars will be added to your account within 6-8 weeks!</h2>
            </div>
            <div className="board-row">
                {renderCoin()}
            </div>
            <div className="board-row">
                {renderCoin()}
            </div>
            <div className="board-row">
                {renderCoin()}
            </div>
        </div>
    )
}

export default GameBoard;