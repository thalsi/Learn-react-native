import React,{ Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class List extends Component{

    render(){
        return(
           
            <View style={style.contanier}>
                <Text style={style.hader}>React Native Toutrial</Text>
                <FlatList style={{  paddingTop:30 }}  data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    ]}
                renderItem={({item})=><Text style={style.item} >{item.key}</Text>}
                />
            </View>
        );
    }
}

const style=StyleSheet.create({
    contanier:{
        flex:1,
        paddingTop:22
    },
    hader:{
        marginTop:5,
        color:'blue',
        fontSize:20,
        textAlign:'center'
    },
    item:{
        padding:10,
        fontSize:15,
        borderColor:'blue',
        borderWidth:1
    }
})

export default List;