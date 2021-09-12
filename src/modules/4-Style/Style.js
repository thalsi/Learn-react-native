import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Styles extends Component{
    render(){
        return(
            // <View>
            //     <Text style={{backgroundColor:'green', fontSize:20}}>hi</Text>
            //     <Text style={style.hello}>hi hello world</Text>
            // </View>,
            <View>
                <View style={style.box1}></View>
                <View style={style.box2}></View>
                <View style={style.box3}></View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    // hello:{
    //     fontWeight:'100',
    //     backgroundColor:'yellow'
    // }

    box1:{
        width:100,
        height:100,
        backgroundColor:'yellow'
    },
    box2:{
        height:200,
        width:200,
        backgroundColor:'green'
    },
    box3:{
        width:300,
        height:300,
        backgroundColor:'blue'
    }
});

export default Styles;