import { Component } from "react";
import {Image, Label, Button, Icon} from 'semantic-ui-react'


class home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div className="my-image-div">
                <div>
                    <Image className="my-image" src="/Images/Abhi.jpg" centered size="medium"></Image>
                </div>
                <div>
                    <Label basic size="massive">Abhijit Kadam</Label>
                </div>
                <div>
                <Label basic size="huge">Full Stack Developer</Label>
                </div>
                <div>
                    <Button color="" size="big">
                        <a href="#about-me">Know more
                            <Icon name="arrow right"></Icon>
                        </a>
                    </Button>
                </div>
            </div>
        )
    }
}

export default home