import React,{useState, useEffect}from "react";
import coinPng from '../images/scratch_coin.png'
import ScratchCard from 'react-scratchcard-v2';

function Coin (props)  {
    const [win, setWin] = useState('Please play again');
    const [totalDone, setDone] = useState(0);
    let prizeAmount = 0;

    function setComplete() {
        if (win == 'You Win 10,000 BuyMore Dollars')
            document.getElementById("winMessage").style.display = "block";
        if (win == 'You Win 750 BuyMore Dollars')
            document.getElementById("winMessage").style.display = "block";
        if (win == 'You Win 100 BuyMore Dollars')
            document.getElementById("winMessage").style.display = "block";
        if (win == 'You Win 20 BuyMore Dollars')
            document.getElementById("winMessage").style.display = "block";
    }

    useEffect(()=>{
        const checkWinCard = () => {
            let checkWin = Math.random() * 10
            if (checkWin > 7) {
                let checkPrize = Math.random() * 100
                if (checkPrize < 1) {
                    setWin('You Win 10,000 BuyMore Dollars')
                    prizeAmount = 10000;
                } else if (checkPrize > 1 && checkPrize <= 5) {
                    setWin('You Win 750 BuyMore Dollars')
                    prizeAmount = 750;
                } else if (checkPrize > 5 && checkPrize <= 15) {
                    setWin('You Win 100 BuyMore Dollars')
                    prizeAmount = 100;
                } else {
                    setWin('You Win 20 BuyMore Dollars')
                    prizeAmount = 20;
                }
                
            } else {
                setWin('Please play again')
            }       
        }
        checkWinCard();
    }, [win]) 

    return(
        <section>
            {/* coin image for scratch game board */}
            <ScratchCard width={130} height={130} image={coinPng} finishPercent={80} onComplete={setComplete}>
                <div className="coin-bg" >
                    <h1>{win}</h1>
                </div>
            </ScratchCard>
        </section>
    )
    
}

export default Coin;