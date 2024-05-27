import React from "react";
import { render } from "react-dom";

class GitCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1: 0,
        };
    }
    render(){
        return(
            <>
            <h2>Count: {this.state.count1}</h2>
            <h1>Name: Saurabh Nahar</h1>
            <h2>Age: 29</h2>
            <button onClick={()=>{
                this.setState({
                    count1: this.state.count1 + 1
                })
            }}>Click!</button>
            </>
        )
    }
}
export default GitCard;