import React from 'react';
import List from './src/list/list';
import Home from './src/Home/Home';
import Fundamentals from './src/modules/1-Fundamentals/Fundamentals';
import Props from './src/modules/2-Props/Props';
import States from './src/modules/3-States/States';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fundamentals" component={Fundamentals} />
          <Stack.Screen name="Props" component={Props} />
          <Stack.Screen name="state" component={States} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;