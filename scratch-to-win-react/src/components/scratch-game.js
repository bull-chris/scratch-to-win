import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../css/game-stlye.css';
import GameBoard from "./game-board";

function ScratchGame (props) {
    const [gameCard, setGameCard] = useState();
    const [disable, setDisable] = useState(false);

    const handleStart = () => {
        setGameCard([0,1,2]);
        setDisable(true)
    }

    //scratch game
    return(
        <div className="game-container">
            <div className="instruction-container">
                {/* instructions for scratch game board */}
                <div className="instruction-main">
                    <h3>Instructions on How to Play</h3>
                    <div className="instruction-main-paragraph">
                        <p>(1) Hit the "Start" button at the bottom of the page. <br/>
                        (2) Scratch the $ coins to reveal what's behind them. <br/>
                        (3) Keep going until all you have recieved a prize.<br/>
                        (4) If you have achieved a winning prize,<br/>you will be presented with a skill question.<br/>
                        (5) If you have not achieved a prize,<br/> you can try again in 72 hours.<br/>
                        </p>
                    </div>
                </div>
                {/* game board element */}
                <div className="game-board">
                    <GameBoard startIndex={gameCard} />
                </div>
            </div>
            {/* game controls */}
            <div className="instruction-footer">
                <Link to="/legal"><button>Terms and Conditions</button></Link>
                <button disabled={disable} onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}   

export default ScratchGame;