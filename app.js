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
            {   path: "/portfolio",
                element: <Suspense fallback = {"Loading!!"}><Portfolio/></Suspense>
            }
        ],
        errorElement: <Error/> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('app')).render(<RouterProvider router={router} />);