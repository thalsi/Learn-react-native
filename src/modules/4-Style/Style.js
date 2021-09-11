import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Styles extends Component{
    render(){
        return(
            <View>
                <Text style={{backgroundColor:'green', fontSize:20}}>hi</Text>
                <Text style={style.hello}>hi hello world</Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    hello:{
        fontWeight:'100',
        backgroundColor:'yellow'
    }
});

export default Styles;