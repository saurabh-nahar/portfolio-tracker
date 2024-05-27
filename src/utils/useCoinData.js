import { useEffect, useState } from "react";
import { API_LINK } from "../utils/constants";

const useCoinData = () => {
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

    return coinData;
}

export default useCoinData;