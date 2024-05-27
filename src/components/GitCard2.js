import {Component} from "react";

class GitCard2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Default",
                location: "Default Location",
                followers: 0
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/saurabh-nahar");
        const json = await data.json();
        console.log(json);
        this.setState ({
            userInfo: json,
        })
    }
    render(){
        const {name, location, followers} = this.state.userInfo;
        return(
        <div>
            <p>Name:{name}</p>
            <p>Location:{location}</p>
            <p>Followers:{followers}</p>
        </div>
        )
    }
}

export default GitCard2;