import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class HorizontalList extends Component {
  render() {
    return (
      <ScrollView style={styles.horizontalList} horizontal>
        {this.props.children}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  horizontalList: {
    marginVertical: 20,
  }
});

export default HorizontalList;