
// 1. function componet

// import React from 'react';
// import { Text } from 'react-native';

// const HelloFunction =()=>{
//     return (
//         <Text>Hello world.. thalseeh</Text>
//     );
// }

// export default HelloFunction;






//2 class componet

// import React,{ Component } from 'react';
// import { Text } from 'react-native';


// class HelloClass extends Component {
//     render(){
//         return (
//             <Text>hello calss componet</Text>
//         );
//     }
// }

// export default HelloClass;







//2. Custom Components

// import React from 'react';
// import {View,Text,TextInput} from 'react-native';

// const HelloCustom =()=>{

//     return(
//         <View>
//             <Text>Hello World..!s</Text>
//             <TextInput
//             style={{
//                 height:40,
//                 borderColor:'green',
//                 borderWidth:1,
//             }}
//             defaultValue="Enter Value"></TextInput>
//         </View>
//     );
// }

// export default HelloCustom;





//4 .multiple components

import React, { useState } from 'react';
import {View, Text, Image, Button} from 'react-native'

const Detials=(props)=>{
    const [value,setValue]=useState(false);
    return(
        <View>
            <Text>Hello Detials page { props.name }</Text>
            <Image
            source={{uri:'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg'}}
            style={{
                width:100,
                height:100
            }}
            >
            </Image>
            <Button
            onPress={()=>{
                setValue(!value);
            }}
            title={value?'Clicked':'Click'}></Button>
        </View>
    );
}

const Hello=()=>{
    return(
        <View>
            <Text>Hello</Text>
            <Detials/>
            <Detials/>
            <Detials name="Manu"/>
            <Detials name="Ali"/>
            <Detials name="thalsi"/>
        </View>
    );
}

export default Hello;