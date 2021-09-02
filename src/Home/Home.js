import React, { Component } from 'react';
import { Text,Button } from 'react-native';
class Home extends Component {
  render() {
    
    return (
      <Text>Hello, I am your cat!</Text>,
      <Button title="Go to List" onPress={() =>this.props.navigation.navigate('List')} />
    );
  }
}

export default Home;