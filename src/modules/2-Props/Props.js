import React,{Component} from "react";
import {View,Text} from 'react-native';

const FristComponent =(props)=>{
    return(
        <View style={{alignItems:'center'}}>
            <Text>Hi {props.name}!</Text>
        </View>
    );
}

class Props extends Component{
    render(){
        return(
            <View style={{alignItems:'center',top:50}}>
                <FristComponent name='ali mon'/>
                <FristComponent name='Ammen'/>
                <FristComponent name='Ajumal'/>
            </View>
        )
    }
}

export default Props;
