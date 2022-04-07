import React,{useState, useEffect}from "react";
import coinPng from '../images/scratch_coin.png'
import ScratchCard from 'react-scratchcard-v2';

function Coin (props)  {
    const [win, setWin] = useState('You Lose')

    useEffect(()=>{
        const checkWinCard = () => {
            let checkWin = Math.random() * 10
            if (checkWin > 7) {
                let checkPrize = Math.random() * 100
                if (checkPrize < 1) {
                    setWin('You Win 10,000 BuyMore Dollars')
                } else if (checkPrize > 1 && checkPrize <= 5) {
                    setWin('You Win 750 BuyMore Dollars')
                } else if (checkPrize > 5 && checkPrize <= 15) {
                    setWin('You Win 100 BuyMore Dollars')
                } else {
                    setWin('You Win 20 BuyMore Dollars')
                }
                
            } else {
                setWin('You Lose')
            }       
        }
        checkWinCard();
    }, [win]) 

    return(
        <section>
        {/* coin image for scratch game board */}
        <ScratchCard width={130} height={130} image={coinPng} finishPercent={80} >
            <div className="coin-bg" >
                <h1>{win}</h1>
            </div>
        </ScratchCard>
        </section>
    )
    
}

export default Coin;