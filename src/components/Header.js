import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGasPrice from "../utils/useGasPrice";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";

const Header = () => {
    const[loginStatus, setLoginStatus] = useState("Login");

    const status = useOnlineStatus();

    const setLogin = ()=>{
        if(loginStatus === "Login"){
            setLoginStatus("Logout");
        }else{
            setLoginStatus("Login");
        }
    } 
    const gasPrice = useGasPrice();

    const {nightMode, setSwitchNightMode} = useContext(NightModeContext);

    const nightModeHandler = () => {
        setSwitchNightMode(!nightMode);
        console.log(nightMode);
    }
    
    return(
        <>
        <div className="flex align-middle justify-between h-[5vh] py-[1vh]">
            <div className="flex items-center">
            <Link to={"/"}><img className=" w-12 pr-4" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"></img></Link>
            <span><i className="fa-brands fa-ethereum"></i> Gas: {gasPrice} Gwei</span>
            </div>
            <ul className="list-none flex justify-around items-center px-[2vw]">
                <li>{status == true ? "🟢 Online" : "🔴 Offline" }</li>
            <Link to={"/portfolio"}><li className="px-[2vw]">Potfolio</li></Link>
                <Link to={"/about"}><li className="px-[2vw]">About</li></Link>
                <Link to={"/contact"}><li className="px-[2vw]">ContactUs</li></Link>
                <li className="px-[2vw] cursor-pointer" onClick={()=> setLogin()}>{loginStatus}</li>
                <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={nightMode} 
        onChange={nightModeHandler} 
        className="sr-only peer" 
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    </label>
            </ul>
        </div>
        <hr className="w-[100vw] border-orange-300"></hr>
        </>
    )
}

export default Header;