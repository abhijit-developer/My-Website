import { Component } from "react";
import { Icon, Label, Button, Header, Grid, Divider, Container,Popup } from "semantic-ui-react";
import{ImLocation2} from 'react-icons/im'
import{AiOutlineMail} from 'react-icons/ai'
import{FaHackerrank} from 'react-icons/fa'
import { Link } from 'react-router-dom';

class contactme extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div  className="contact-me">
                <div>
                    <Header inverted as="h1" style={{marginBottom:25,borderBottom: '3px solid red',width:'fit-content'}}>Contact</Header>
                    <Divider horizontal color="red">||</Divider>
                </div>
                <div>
                    <Popup content='Facebook'
                        trigger={<Button primary id="facebook" size="medium">
                        <a href="https://www.facebook.com/abhijit.kadam.5055"> 
                            <Icon name="facebook" color="black" size="big"></Icon>   
                        </a>     
                    </Button>
                    } />
                    <Popup content='Linkedin'
                        trigger={
                    <Button primary id="linkedin" color="blue" size="medium">
                        <a href="https://www.linkedin.com/in/abhijit-kadam-a5912816b">
                            <Icon name="linkedin" color="black" size="big"></Icon>
                        </a>
                    </Button>
                    } />
                    <Popup content='Instagram'
                        trigger={
                        <Button primary id="instagram" color="blue" size="medium">
                            <a href="https://github.com/abhijit-developer">
                                <Icon name="instagram" color="black" size="big"></Icon>
                            </a>
                        </Button>
                    } />
                    <Popup content='Github'
                        trigger={
                        <Button primary id="github" color="blue" size="medium">
                            <a href="https://github.com/abhijit-developer">
                                <Icon name="github" color="black" size="big"></Icon>
                            </a>        
                        </Button>
                    } />
                    <Popup content='Mail'
                        trigger={<Button primary id="gmail" color="blue" size="medium">
                            <a href="mailto:kadamabhijit965@gmail.com">
                                <Icon name="mail" color="black" size="big"></Icon>
                            </a>
                        </Button>
                    } />
                    <Popup content='Hackerrank'
                         trigger={<Button primary id="hackerrank" color="blue" >
                        <a href="https://www.hackerrank.com/kadamabhijit965">
                        <Icon name="hospital symbol" color="black" size="big"></Icon>
                        </a>
                    </Button>
                    } />
                                            
                    
                    <div className="copyrights-div">
                    <Grid textAlign='center' verticalAlign='middle'>
                        <Grid.Row>
                            <div style={{margin:10}}>
                                <a href="https://www.google.com/maps/place/Viman+Nagar,+Pune,+Maharashtra+411014/@18.5675985,73.9117567,16z/data=!4m13!1m7!3m6!1s0x3bc2c146e61484b5:0xb6482cf7a8b4b3b0!2sViman+Nagar,+Pune,+Maharashtra+411014!3b1!8m2!3d18.5679146!4d73.9143432!3m4!1s0x3bc2c146e61484b5:0xb6482cf7a8b4b3b0!8m2!3d18.5679146!4d73.9143432">
                                    <ImLocation2 size='30' color="red"></ImLocation2>    
                                </a><br></br>
                                <Header basic inverted as="h4">Pune,Maharashtra,India</Header>
                                
                            </div>
                            <div style={{margin:10}}>
                                <AiOutlineMail size='30' color="red"></AiOutlineMail><br></br>
                                <Header basic inverted as="h4">kadamabhijit965@gmail.com</Header>    
                            </div>
                        </Grid.Row>
                    </Grid>
                    
                    </div>
                    <div className="copyrights-div" >
                        <div class="container">
                            <div class="footer-distributed">
                                <div class="footer-left">
                                <p class="footer-company-name">© 2021 <a href="#">Abhijit Kadam</a>
                                </p></div>
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>
        )
    }
}

export default contactme