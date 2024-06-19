import React, {lazy, Suspense, useState} from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Header from "./src/components/Header";
import BasicTable from "./src/components/BasicTable";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Portfolio from "./src/components/Portfolio";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NightModeContext from "./src/utils/NightModeContext";
import Subscription from "./src/components/Subscription";
import Feed from "./src/components/Feed";
import YouTube from "./src/components/YouTube";
import News from "./src/components/News";
import TwitterFeed from "./src/components/TwitterFeed";
import WalletHoldings from "./src/components/WalletHoldings";


const Portfolio = lazy(()=> import('./src/components/Portfolio'));

const App = () =>{
    const [switchNightMode, setSwitchNightMode] = useState(false);
    return(
        <div className="dark:bg-black">
        <Provider store = {appStore}>
        <NightModeContext.Provider value={{ nightMode: switchNightMode, setSwitchNightMode}}>
        <Header />
        <Outlet/>
        </NightModeContext.Provider>
        </Provider>   
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {   path: "/",
                element: <BasicTable/>
            },
            {   path: "/about",
                element: <About/>
            },
            {   path: "/contact",
                element: <Contact/>
            },
            {   path: "/subscription",
                element: <Subscription/>
            },
            {   path: "/holdings",
                element: <WalletHoldings/>
            },
            {   path: "/portfolio",
                element: <Suspense fallback = {"Loading!!"}><Portfolio/></Suspense>
            },
            {   path: "/feed",
                element: <Feed/>,
                children:[
                    {
                        path: "/feed/youtube",
                        element: <YouTube/>
                    },
                    {
                        path: "/feed/news",
                        element: <News/>
                    },
                    {
                        path: "/feed/x",
                        element: <TwitterFeed/>
                    }
                ]
            },
        ],
        errorElement: <Error/> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('app')).render(<RouterProvider router={router} />);