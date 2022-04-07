import React from "react";
import Coin from "./coin";
import uniqid from "uniqid";


function GameBoard (props) {
    //render a coin to the game board

    const renderCoin = () => {
        if (props.startIndex) {
            return props.startIndex.map((id) => <Coin key={uniqid()}/>)
        }
    }
    
    //render the game board as 3x3 grid
    return(
        <>
            <div className="board-row">
                {renderCoin()}
            </div>
            <div className="board-row">
                {renderCoin()}
            </div>
            <div className="board-row">
                {renderCoin()}
            </div>
        </>
    )
}

export default GameBoard;