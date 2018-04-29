import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class HomeMenuItem extends Component {
  render() {
    return (
      <View style={styles.menuItem}>
        <Image style={styles.menuItemImage} source={this.props.data.icon} />
        <Text style={styles.menuItemText}>{ this.props.data.title }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    width: '25%',
    alignItems: 'center',
    marginTop: 15,
  },
  menuItemText: {
    marginTop: 7
  },
  menuItemImage: {
    width: 44,
    height: 44,
  },
});

export default HomeMenuItem;