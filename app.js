import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";

const App = () =>{
    return(
        <div>
        <Header />
        <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app')).render(<App/>);