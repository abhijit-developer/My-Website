import { Component } from "react";
import {Segment,Grid,Icon,Label, Header} from 'semantic-ui-react'
import { SiJava,SiSpring,SiJquery,SiMysql,SiPostgresql,SiJson} from 'react-icons/si';
import {BiCodeAlt} from 'react-icons/bi'

class myskills extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div className="my-skills-div">
                <div>
                    <div style={{margin:15}}><Header as="h1">My Skills</Header></div>
                    <div><Label basic size="big">The only way to learn a new programming language is by writing programs in it - Dennis Ritchie</Label></div>
                </div>
                <div className="skills-container row">
                    <div>
                        <Grid textAlign='center' verticalAlign='middle'>
                            <Grid.Row>
                                <Segment id="segment1" className="cs-lm-rm">
                                    <Icon  bordered inverted color='teal' name="laptop" size="huge"/>
                                    <div><Label basic size="huge">Frontend Design</Label></div>
                                    <div>
                                        <Icon loading color="teal" name="react"></Icon>
                                        <Label basic>react |</Label>
                                        <Icon color="red" name="angular"></Icon>
                                        <Label basic>Angular |</Label>
                                        <Icon color="orange" name="file code outline"></Icon>
                                        <Label basic>HTML |</Label><br/>
                                        <Icon color="blue" name="css3"></Icon>
                                        <Label basic>CSS3 |</Label>
                                        <Icon loading color="teal" name="sun outline"></Icon>
                                        <Label basic>Semantic UI|</Label>
                                        <Icon color="teal" name="star outline"></Icon>
                                        <Label basic>Bootstrap|</Label><br/>
                                        <Icon color="teal" name="node js"></Icon>
                                        <Label basic>Javascript|</Label>
                                        <SiJquery color="red"/>
                                        <Label basic>Jquery</Label>
                                    </div>
                                </Segment>
                                <Segment id="segment2" className="cs-lm-rm">
                                    <Icon  bordered inverted color='teal' name="window restore" size="huge"/>
                                    <div><Label basic size="huge">Backend Design</Label></div>
                                    <div>
                                        <SiJava color="teal"/>
                                        <Label basic>Java 8|</Label>
                                        <SiSpring color="greenyellow"/>
                                        <Label basic>Spring boot |</Label>
                                        <Icon color="orange" name="database"></Icon>
                                        <Label basic>Data JPA |</Label><br/>
                                        <Icon color="brown" name="houzz"></Icon>
                                        <Label basic>Hibernate|</Label>
                                        <Icon color="blue" name="file code outline"></Icon>
                                        <Label basic>Restfull web services</Label><br/>
                                    </div>
                                </Segment>
                                <Segment id="segment3" className="cs-lm-rm">
                                    <Icon  bordered inverted color='teal' name="file code outline" size="huge"/>
                                    <div><Label basic size="huge">Other Tools and Technologies</Label></div>
                                    <div>
                                    <Icon color="blue" name="copyright"></Icon>
                                        <Label basic>c/c++|</Label>
                                        <SiMysql color="teal"/>
                                        <Label basic>My Sql |</Label>
                                        <SiPostgresql color="blue"/>
                                        <Label basic>postgress |</Label><br/>
                                        <BiCodeAlt color="orange" />
                                        <Label basic>XML|</Label>
                                        <SiJson color="DeepPink" />
                                        <Label basic>JSON</Label>
                                        <br/>
                                    </div>
                                </Segment>
                            </Grid.Row>
                        </Grid>  
                    </div>
                </div>
            </div>
        )
    }
}

export default myskills