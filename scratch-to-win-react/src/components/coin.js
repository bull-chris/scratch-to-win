import React,{Component}from "react";
import coinPng from '../images/scratch_coin.png'

class Coin extends Component {
    render() {
        return(
            <>
                <img width='125px' src={coinPng}/>
            </>
        )
    }
}

export default Coin;