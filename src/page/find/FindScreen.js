import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class FindScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Find Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
});

export default FindScreen;