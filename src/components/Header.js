import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useGasPrice from "../utils/useGasPrice";
import useOnlineStatus from "../utils/useOnlineStatus";
import NightModeContext from "../utils/NightModeContext";
import { useSelector} from "react-redux";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const status = useOnlineStatus();
  const gasPrice = useGasPrice();
  const { nightMode, setSwitchNightMode } = useContext(NightModeContext);

  const setLogin = () => {
    if (loginStatus === "Login") {
      setLoginStatus("Logout");
    } else {
      setLoginStatus("Login");
    }
  };

  const nightModeHandler = () => {
    setSwitchNightMode(!nightMode);
    if (!nightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const total = useSelector((store) => 
  store.portfolio.holding.reduce((total, h) => total + h.coinTotal, 0)
);


  // useEffect(()=>{
  //   total();
  //   }, holdingArr);

  //   const total = () => {
  //     const total = 0
  //     holdingArr.map((h) => {
  //       total += h.coinTotal;
  //     });
  //     return total;
  //   };

  return (
    <>
      <div className="flex align-middle justify-between h-[5vh] py-[1vh] dark:bg-black dark:text-white">
        <div className="flex items-center dark:bg-black">
          <Link to={"/"}>
            <img
              className="w-12 pr-4 dark:bg-black"
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="Logo"
            />
          </Link>
          <span className="dark:bg-black">
            <i className="fa-brands fa-ethereum dark:bg-black"></i> Gas: {gasPrice} Gwei
          </span>
        </div>
        <ul className="list-none flex justify-around items-center px-[2vw] dark:bg-black">
          <li className="dark:bg-black">{status ? "🟢 Online" : "🔴 Offline"}</li>
          <Link to={"/portfolio"}>
            <li className="px-[2vw] dark:bg-black">Portfolio: ({total})</li>
          </Link>
          <Link to={"/subscription"}>
            <li className="px-[2vw] dark:bg-black">Subscription</li>
          </Link>
          <Link to={"/feed"}>
            <li className="px-[2vw] dark:bg-black">Feed</li>
          </Link>
          <Link to={"/about"}>
            <li className="px-[2vw] dark:bg-black">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="px-[2vw] dark:bg-black">ContactUs</li>
          </Link>
          <li className="px-[2vw] cursor-pointer dark:bg-black" onClick={setLogin}>
            {loginStatus}
          </li>
          <label className="relative inline-flex items-center cursor-pointer dark:bg-black">
            <input
              type="checkbox"
              checked={nightMode}
              onChange={nightModeHandler}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-bisque-400 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </ul>
      </div>
      <hr className="w-[100vw] border-orange-300"></hr>
    </>
  );
};

export default Header;
