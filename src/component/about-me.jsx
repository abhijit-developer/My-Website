import { Component } from "react";
import{Grid, Label, Segment,Image, Header} from 'semantic-ui-react'



class aboutme extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Row>
                        <Segment id="about-me-segment1">
                            <div style={{margin:15}}>
                            <Header as="h1">About me</Header>
                            </div>
                            <Label basic size="big">    
                                <p>As a Full Stack Developer,<br/>
                                I make interactive magnetic Frontend<br/>
                                applications with equally dynamic Backend programming.<br/>
                                I am always in search of new ways to <br/>
                                challenge myself and grow technically.<br/>
                                Coding never tires me.<br/>
                                I love what I do which makes me the colleague<br/> 
                                who is always cheerfull at work.<br/>
                                Epecially on Mondays.
                                </p>
                            </Label>
                        </Segment>
                        <Segment id="about-me-segment2">
                            <Image src='/Images/work_graphics.jpg' size='big' />
                        </Segment>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default aboutme