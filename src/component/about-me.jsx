import { Component } from "react";
import{Grid, Label,List, Segment,Image, Header,Button,Divider} from 'semantic-ui-react'
import {MdWork} from 'react-icons/md'



class aboutme extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div>
                <div>
                    <Header as="h1">About me</Header>
                    <Divider horizontal color="red">||</Divider>
                </div>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Row>
                        <Segment id="about-me-segment1">
                            <Label basic size="big">    
                                <p>As a Full Stack Developer,
                                I make interactive magnetic Frontend
                                applications with equally dynamic Backend programming.
                                I am always in search of new ways to
                                challenge myself and grow technically.
                                Coding never tires me.
                                I love what I do which makes me the colleague 
                                who is always cheerfull at work.
                                Epecially on Mondays.
                                </p>
                            </Label>
                        </Segment>
                        <Segment id="segment3">
                            <div style={{margin:15}}>
                                <Header as="h1" color="brown">Education</Header>
                            </div>
                        <List divided relaxed>
                                    <List.Item>
                                    <List.Icon name='graduation cap' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Savitribai Phule University, Pune</List.Header>
                                        <List.Description>Indira college of commerce and science, Wakad</List.Description>
                                        <List.Description as='a'>Master of computer science</List.Description>
                                        <List.Description>Scored an aggrigate of 9.0 CGPA</List.Description>
                                    </List.Content>
                                    </List.Item>
                                    <List.Item>
                                    <List.Icon name='graduation cap' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a' >Savitribai Phule University, Pune</List.Header>
                                        <List.Description>Vidya pratishthan art science and commorse college, Baramati</List.Description>
                                        <List.Description as='a'>Bachelor of computer science</List.Description>
                                        <List.Description>Scored an aggrigate of 72.43 Percentage</List.Description>
                                    </List.Content>
                                    </List.Item>
                                    <List.Item>
                                    <List.Icon name='graduation cap' size='large' verticalAlign='middle' />
                                    <List.Content>
                                    <List.Header as='a'>Yashwantrao chavan University</List.Header>
                                        <List.Description>Yashwantrao chavan junior college of commorse and science, Phaltan</List.Description>
                                        <List.Description as='a'>HSC in science</List.Description>
                                        <List.Description>Scored an aggrigate of 56.65 Percentage</List.Description>
                                    </List.Content>
                                    </List.Item>
                                </List>
                                </Segment>
                                <Segment id="segment3">
                                <div style={{margin:15}}>
                                    <Header as="h1" color="brown">Experience</Header>
                                </div>
                        <List divided relaxed>
                                    <List.Item>
                                    <List.Icon verticalAlign='middle'><MdWork size="25"></MdWork></List.Icon>
                                    <List.Content>
                                        <List.Header as='a'>Aloha Technology pvt ltd</List.Header>
                                        <List.Description>Software Developer</List.Description>
                                        <List.Description as='a'>Oct 2020 - Present</List.Description>
                                        <List.Header as='a'>Tools and Technology:</List.Header>
                                        <List.Description as='a'>Core java, servlet, JSP, CSS, javascript, Jquery,
                                         Bootstrap, Mysql<br></br>Amazon web services, Git, Jira</List.Description>
                                    </List.Content>
                                    </List.Item>
                                    <List.Item>
                                    <List.Icon verticalAlign='middle'><MdWork size="25"></MdWork></List.Icon>
                                    <List.Content>
                                        <List.Header as='a' >Dimentrix Technology pvt ltd.</List.Header>
                                        <List.Description>Software Developer</List.Description>
                                        <List.Description as='a'>July 2019 - March 2020</List.Description>
                                        <List.Header as='a'>Tools and Technology:</List.Header>
                                        <List.Description as='a'>Core java, servlet, HTML, CSS, javascript, Jquery,
                                         Semantec UI, Mysql<br></br> SVN, mantis BT</List.Description>
                                    </List.Content>
                                    </List.Item>
                                </List>
                                </Segment>
                    </Grid.Row>
                </Grid>
                <Label basic size="massive" >For more Information </Label>
                <Button basic color="orange" size="big" style={{borderRadius:"40px"}}>
                        <a href="/resume/AbhiK-resume-1+YOE.pdf" download>Download My Resume
                        </a>
                </Button>
            </div>
        )
    }
}

export default aboutme