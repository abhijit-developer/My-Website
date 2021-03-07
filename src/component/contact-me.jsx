import { Component } from "react";
import { Icon, Label, Button, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class contactme extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(   
            <div  className="contact-div">
                <div>
                    <Header as="h1" style={{marginBottom:25}}>Contact</Header>
                </div>
                <div>
                    <Button primary id="facebook" size="medium">
                        <a href="https://www.facebook.com/abhijit.kadam.5055"> 
                            <Icon name="facebook" color="black" size="big"></Icon>   
                        </a>     
                    </Button>
                    <Button primary id="linkedin" color="blue" size="medium">
                        <a href="https://www.linkedin.com/in/abhijit-kadam-a5912816b">
                            <Icon name="linkedin" color="black" size="big"></Icon>
                        </a>
                    </Button>
                    <Button primary id="instagram" color="blue" size="medium">
                        <a href="https://github.com/abhijit-developer">
                            <Icon name="instagram" color="black" size="big"></Icon>
                        </a>
                    </Button>
                    <Button primary id="github" color="blue" size="medium">
                        <a href="https://github.com/abhijit-developer">
                            <Icon name="github" color="black" size="big"></Icon>
                        </a>        
                    </Button>
                    <Button primary id="gmail" color="blue" size="medium">
                        <a href="mailto:kadamabhijit965@gmail.com">
                            <Icon name="mail" color="black" size="big"></Icon>
                        </a>
                    </Button>
                    <div className="copyrights-div" >
                        <div class="container">
                            <div class="footer-distributed">
                                <div class="footer-left">
                                <p class="footer-company-name">© 2020 <a href="#">Abhijit Kadam</a>
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