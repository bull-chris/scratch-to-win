import React, {Component} from "react";
import Coin from "./coin";

class GameBoard extends Component {
    renderCoin(i) {
        return(
            <Coin/>
        )
    }

    render() {
        return(
            <>
                <div className="board-row">
                    {this.renderCoin(0)}
                    {this.renderCoin(1)}
                    {this.renderCoin(2)}
                </div>
                <div className="board-row">
                    {this.renderCoin(3)}
                    {this.renderCoin(4)}
                    {this.renderCoin(5)}
                </div>
                <div className="board-row">
                    {this.renderCoin(6)}
                    {this.renderCoin(7)}
                    {this.renderCoin(8)}
                </div>
            </>
        )
    }
}

export default GameBoard;