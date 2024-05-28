import React, { useEffect, useState} from "react";
import useCoinData from "../utils/useCoinData";

const Body = ()=> {

  const coinData = useCoinData();

    return coinData === null ? (
      <h1>Rendering</h1>
    ) : (
      <>
        <div className="px-5 dark:bg-black">
          <table className="table-auto w-full dark:bg-black dark:text-white">
            <thead>
              <tr className="dark:bg-black">
                <th className="px-4 py-2 dark:bg-black">Rank</th>
                <th className="px-4 py-2 dark:bg-black">Name</th>
                <th className="px-4 py-2 dark:bg-black">% Change 1h</th>
                <th className="px-4 py-2 dark:bg-black">% Change 24h</th>
                <th className="px-4 py-2 dark:bg-black">% Change 7d</th>
                <th className="px-4 py-2 dark:bg-black">Price</th>
              </tr>
            </thead>
            <tbody>
              {coinData.data.map((coin, index) => (
                <tr
                  key={coin.id}
                  className={index % 2 === 0 ? "bg-gray-100 dark:bg-black" : "bg-white dark:bg-black"}
                >
                  <td className="px-4 py-2 text-center dark:bg-black">{coin.cmc_rank}</td>
                  <td className="px-4 py-2 text-center dark:bg-black">{coin.symbol}</td>
                  <td className="px-4 py-2 text-center dark:bg-black">
                    {coin.quote.USD.percent_change_1h >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_1h).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center dark:bg-black">
                    {coin.quote.USD.percent_change_24h >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_24h).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center dark:bg-black">
                    {coin.quote.USD.percent_change_7d >= 0 ? "🟢" : "🔴"}{" "}
                    {Math.abs(coin.quote.USD.percent_change_7d).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-center dark:bg-black">
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
