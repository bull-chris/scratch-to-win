import React,{Component}from "react";
import coinPng from '../images/scratch_coin.png'

class Coin extends Component {
    render() {
        return(
            <>
            {/* coin image for scratch game board */}
                <img width='125px' alt="Scratch coin for game" src={coinPng}/>
            </>
        )
    }
}

export default Coin;