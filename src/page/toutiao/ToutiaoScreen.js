import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class ToutiaoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Toutiao Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  }
}); 

export default ToutiaoScreen;