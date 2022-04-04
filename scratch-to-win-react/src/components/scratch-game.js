import React, {Component} from "react";
import '../css/game-stlye.css';
import GameBoard from "./game-board";

class ScratchGame extends Component {
    render() {
        return(
            <div className="game-container">
                <div className="instruction-container">
                    <div className="instruction-main">
                        <h3>Instruction on  How to play</h3>
                        <p>(1)fill out user information form. <br/>
                        (2)click on the link to play game.<br/>
                        (3)scratch a card to see your results.<br/>
                        (4)if you won prize you have to answer a<br/> skill question in order to get prize.<br/>
                        (5)if you lost on the game,<br/> you can re-attempt after 72 hours <br/>after each attempt.<br/>
                        
                        
                        
                        </p>
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