import { Component } from "react";
import {Image, Label, Button, Icon, Header} from 'semantic-ui-react'


class home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div className="my-image-div" style={{height:"100%",position:"relative"}}>
                <div style={{position:"relative"}}>
                <Header id="font-class" as="h2" basic inverted >I'm Abhijit kadam </Header>
                <Header id="font-class" basic as="h2" color='yellow'basic inverted>
                    Full Stack Developer
                </Header>
                </div>
                <div style={{bottom:25,position:"absolute"}}>
                    <Button basic color="orange" size="big" style={{borderRadius:"50px"}}>
                        <a href="/resume/AbhiK-resume-1+YOE.pdf" download>Download My Resume
                        </a>
                    </Button>
                </div>
            </div>
        )
    }
}

export default home