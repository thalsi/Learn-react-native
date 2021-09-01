import React from 'react';
import List from './src/list/list';
import Home from './src/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
    return (
        <Stack.Navigator   initialRouteName="Home">
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}


export default App;