import { Component } from "react";
import {Image, Label, Button, Icon, Header} from 'semantic-ui-react'


class home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div className="my-image-div" style={{minHeight:"inherit",position:"relative"}}>
                <div style={{position:"relative", top:"200px"}}>
                <Header id="font-class" as="h2" basic inverted >I'm Abhijit kadam</Header>
                <Header basic inverted as="h1" color='yellow'>
                    Full Stack Developer
                </Header>
                </div>
                <div style={{bottom:25,position:"absolute"}}>
                    <Button basic color="orange" size="big">
                        <a href="/Images/Back-Image4.jpg" download>Download My Resume
                        </a>
                    </Button>
                </div>
            </div>
        )
    }
}

export default home