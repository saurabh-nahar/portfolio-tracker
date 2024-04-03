import React, { useEffect, useState } from "react";
import { API_LINK } from "../utils/constants";

const Body = ()=> {
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(API_LINK + process.env.COINMARKETCAP_KEY);
                const json = await data.json();
                setCoinData(json);
                console.log(json); 
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return coinData === null ? (<h1>Rendering</h1>) : (
        <div className="px-5">
            <table className="text-black">
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {coinData.data.map((coin)=> {
                    return (<tr key={coin.id}>
                    <td>{coin.cmc_rank}</td> 
                    <td>{coin.symbol}</td>
                    <td>{coin.quote.USD.price.toFixed(2)}</td>
                </tr>)
                })}
            </tbody>
        </table>
        </div>
    );
}

export default Body;
