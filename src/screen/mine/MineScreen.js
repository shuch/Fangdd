import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MineScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mine Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)'
  }
});

export default MineScreen;