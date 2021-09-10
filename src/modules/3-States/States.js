import React,{Component} from "react";
import {View, Text, Button} from 'react-native';

class States extends Component{
    state={
        name:'please click bottom button'
    }

    updateData=()=>{
        this.setState({name:'click enabled..!'})
    }

    render(){
        return(
            <View>
                <Text>{this.state.name}</Text>
                <Button title='Click' onPress={this.updateData}>Click</Button>
            </View>
        );
    }
}

export default States;