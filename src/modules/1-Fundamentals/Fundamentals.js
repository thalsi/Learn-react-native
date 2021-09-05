import React,{ Component } from "react";
import {Text} from 'react-native';

//1.class component
class Fundamentals extends Component{
    render(){
        return(
            <Text>Hi class component</Text>,
            <Functional/>
        )
    }
}
export default Fundamentals;





//2.functional component
const Functional =()=>{
    return(
        <Text>Hi functional component</Text>
    )
}
