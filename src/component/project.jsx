import { Component } from "react";
import {Header, Divider}  from 'semantic-ui-react'


class project extends Component{

    constructor(props){
        super(props)
    }

    render(){
     
        return(
            <div>
                <div>
                    <Header as="h1" style={{borderBottom: '3px solid red',width:'fit-content'}}>Projects</Header>
                    <Divider horizontal color="red">||</Divider>
                </div>
                projects div
            </div>
        )
    }
}

export default project