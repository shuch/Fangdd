import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Message Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default MessageScreen;