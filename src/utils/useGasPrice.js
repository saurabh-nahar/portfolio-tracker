import { useState, useEffect } from "react";
import {ETHERSCAN_API_LINK} from "../utils/constants"

const useGasPrice = () =>{
    const [gasPrice, setGasPrice] = useState(0);
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(ETHERSCAN_API_LINK + process.env.ETHERSCAN_API_KEY);
            const json = await data.json();
            setGasPrice(json.result.ProposeGasPrice);
        }
        fetchData();
    },[])
    return gasPrice;
}

export default useGasPrice;