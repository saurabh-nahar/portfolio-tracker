import React, { useEffect, useState } from "react";

const App = () => {
  const [cryptoHoldings, setCryptoHoldings] = useState(null);
  const[address, setAddress] = useState();
  const[searchAddress, setSearchAddress] = useState();

  useEffect(() => {
    const fetchData = async (searchAddress) => {
      try {
        const response = await fetch(
          `https://deep-index.moralis.io/api/v2.2/wallets/${searchAddress}/tokens/`,
          {
            headers: {
              "X-API-Key": process.env.WALLET_SEARCH_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCryptoHoldings(data.result);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(searchAddress);
  }, [searchAddress]);

  useEffect(() => {
    console.log(cryptoHoldings);
  }, [cryptoHoldings]); 

  const handleSubmit = () => {
    setSearchAddress(address);
  }

  if (!cryptoHoldings) {
    return <div className=" dark:bg-black">
    <input className="border-black rounded-sm m-4 w-96 dark:bg-white dark:text-black" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
    <button className="border-black rounded-md m-4 p-2 dark:bg-white dark:text-black" onClick={handleSubmit}>Submit</button>
</div>
  }

  const formatter = new Intl.NumberFormat('en-us',{
    style: 'currency',
    currency: 'USD'
  })

  let filteredHoldings;
  
//   if (!cryptoHoldings) {
//      filteredHoldings = cryptoHoldings.filter(
//         (token) => token.possible_spam !== true && token.possible_spam !== 'true'
//       );
//   }

  return (
    <div className=" dark:bg-black">
        <div className=" dark:bg-black">
    <input className="border-black rounded-sm m-4 w-96 dark:bg-white dark:text-black" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
    <button className="border-black rounded-md m-4 p-2 dark:bg-white dark:text-black" onClick={handleSubmit}>Submit</button>
</div>
      <table className="min-w-full bg-white border border-gray-200 dark:bg-black">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b dark:bg-black">Name</th>
            <th className="py-2 px-4 border-b dark:bg-black">Symbol</th>
            <th className="py-2 px-4 border-b dark:bg-black">Balance</th>
            <th className="py-2 px-4 border-b dark:bg-black">USD Price</th>
            <th className="py-2 px-4 border-b dark:bg-black">Holding Value</th>
          </tr>
        </thead>
        <tbody>
  {cryptoHoldings
    .map((token, index) => (
      <tr key={index} className="text-center dark:bg-black">
        <td className="py-2 px-4 border-b dark:bg-black">{token.name}</td>
        <td className="py-2 px-4 border-b dark:bg-black">{token.symbol}</td>
        <td className="py-2 px-4 border-b dark:bg-black">{Math.abs(token.balance_formatted).toFixed(2)}</td>
        <td className="py-2 px-4 border-b dark:bg-black">{formatter.format(token.usd_price)}</td>
        <td className="py-2 px-4 border-b dark:bg-black">{formatter.format(token.usd_price * token.balance_formatted)}</td>
      </tr>
    ))}
</tbody>

      </table>
    </div>
  );
};

export default App;
