import React from 'react'
import { useState } from 'react';
import useCoinData from '../utils/useCoinData';
import { useDispatch, useSelector } from 'react-redux';
import { addHolding, removeHolding } from '../utils/portfolioSlice';


const Portfolio = () => {
    const [qtyValue, setQtyValue] = useState(0);
    const[price, setPrice] = useState(null);
    const [selectedCoin, setSelectedCoin] = useState("");

    const coinData = useCoinData();

    const pfArr = useSelector((store) => store.portfolio.holding);
    const dispatch = useDispatch();

    const setVal = (e) => {
        setQtyValue(e.target.value)
    }

    const handlePrice = (e)=>{
        const coinName = e.target.value;
        setSelectedCoin(coinName);
        const findCoinPrice = coinData.data.find((coin)=> coin.symbol === coinName );
        if(findCoinPrice){
            setPrice(findCoinPrice.quote.USD.price.toFixed(2));
        }
    }

    const addToPortfolio = ()=>{
        if(qtyValue > 0 && selectedCoin != ""){

            if(qtyValue >= 0){
                dispatch(addHolding({
                  symbol: selectedCoin ,
                  mktPrice: price,
                  holdingQty: qtyValue,
                  coinTotal: (qtyValue * (price))
              }))
                    setPrice(null);
                    setSelectedCoin("");
                    setQtyValue(0);
            }
        }else{
            alert("Invalid Request, Please select coin and insert qty");
        }
    }

    const removeThisHolding = (index) => {
      dispatch(removeHolding(index))
    }

  return coinData == null? <h3>Loading...</h3> : (
    <div className='dark:bg-black'>
    <div className="flex justify-center items-center dark:bg-black dark:text-white">
    <h1 className='text-3xl font-bold dark:bg-black'>Add to Portfolio</h1>
    </div>
<div className="flex justify-center items-center dark:bg-black dark:text-white">
    <label className="m-2 dark:bg-black">Select Coin:</label>
    <select className="m-5 dark:bg-black" onChange={handlePrice}>
        <option>Options</option>
        {coinData.data.map((coin) => {
            return (
                <option key={coin.id} value={coin.symbol}>
                    {coin.symbol}
                </option>
            );
        })}
    </select>
    <label className="dark:bg-black">Input Qty:</label>
    <input value={qtyValue} className="m-5 border-orange-300 w-12 dark:bg-black" onChange={(e) => setVal(e)} />
    <span className="m-2 dark:bg-black">{qtyValue * price}</span>
    <button onClick={() => addToPortfolio()} className="bg-orange-400 hover:bg-black hover:text-orange-400  text-white font-bold py-2 px-4 rounded dark:hover:bg-white">
  Add
</button>

</div>
<div className='dark:bg-black'>
    <br/>
    <br/>
    <br/>
    </div>
    <table className="table-auto w-full dark:bg-black dark:text-white">
  <thead>
    <tr>
      <th className="px-4 py-2 dark:bg-black">Symbol</th>
      <th className="px-4 py-2 dark:bg-black">Mkt Price</th>
      <th className="px-4 py-2 dark:bg-black">Holding Qty</th>
      <th className="px-4 py-2 dark:bg-black">Total</th>
      <th className="px-4 py-2 dark:bg-black">Remove</th>
    </tr>
  </thead>
  <tbody className='dark:bg-black dark:text-white'>
    {pfArr.map((pfc, index) => (
      <tr key={index}>
        <td className="px-4 py-2 text-center dark:bg-black">{pfc.symbol}</td>
        <td className="px-4 py-2 text-center dark:bg-black">${parseFloat(pfc.mktPrice).toFixed(2)}</td>
        <td className="px-4 py-2 text-center dark:bg-black">{pfc.holdingQty}</td>
        <td className="px-4 py-2 text-center dark:bg-black">${parseFloat(pfc.coinTotal).toFixed(2)}</td>
        <td className="px-4 py-2 text-center dark:bg-black" onClick={()=> removeThisHolding(index)}>x</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default Portfolio;