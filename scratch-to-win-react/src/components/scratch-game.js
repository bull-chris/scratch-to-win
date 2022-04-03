import React, {Component} from "react";
import '../css/game-stlye.css';
import GameBoard from "./game-board";

class ScratchGame extends Component {
    render() {
        return(
            <div className="game-container">
                <div className="instruction-container">
                    <div className="instruction-main">
                        <h3>Instruction on <br/> How to play</h3>
                        <p>asdasdwasc</p>
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