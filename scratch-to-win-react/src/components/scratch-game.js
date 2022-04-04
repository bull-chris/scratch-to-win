import React, {Component} from "react";
import '../css/game-stlye.css';
import GameBoard from "./game-board";

class ScratchGame extends Component {
    render() {
        return(
            <div className="game-container">
                <div className="instruction-container">
                    <div className="instruction-main">
                        <h3>Instructions on How to Play</h3>
                        <div className="instruction-main-paragraph">
                            <p>(1) Hit the "Start" button at the bottom of the page. <br/>
                            (2) Scratch the $ coins to reveal what's behind them. <br/>
                            (3) Keep going until all the cards are scratched.<br/>
                            (4) If you have achieved a prize-winning score,<br/>you will be presented with a skill question.<br/>
                            (5) If you have not achieved a prize,<br/> you can try again in 72 hours.<br/>
                            </p>
                        </div>
                    </div>
                    <div className="game-board">
                        <GameBoard/>
                    </div>
                </div>
                <div className="instruction-footer">
                    <button>Terms and Conditions</button>
                    <div className="game-counter">
                        <p>Game Time : 00:00</p>
                        <p>Current Points: 00:00</p>
                    </div>
                    <button>Exit</button>
                    <button>Start</button>
                </div>
            </div>
        )
    }
}   

export default ScratchGame;