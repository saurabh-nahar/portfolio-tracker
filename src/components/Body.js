import React, { useEffect, useState} from "react";
import useCoinData from "../utils/useCoinData";

const Body = ()=> {

  const coinData = useCoinData();

    return coinData === null ? (
      <h1>Rendering</h1>
    ) : (
      <>
        <div className="px-5">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">% Change 1h</th>
                <th className="px-4 py-2">% Change 24h</th>
                <th className="px-4 py-2">% Change 7d</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {coinData.data.map((coin, index) => (
                <tr
                  key={coin.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 text-center">{coin.cmc_rank}</td>
                  <td className="px-4 py-2 text-center">{coin.symbol}</td>
                  <td className="px-4 py-2 text-center">
                    {coin.quote.USD.percent_change_1h >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_1h).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center">
                    {coin.quote.USD.percent_change_24h >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_24h).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center">
                    {coin.quote.USD.percent_change_7d >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_7d).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center">
                    ${coin.quote.USD.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Body;
