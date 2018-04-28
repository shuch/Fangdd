import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Tag extends Component {
  render() {
    return (
      <View
        style={
          [
            styles.tag,
            this.props.type === 'xf' ? styles.tagRed : styles.tagGreen
          ]
      }>
        <Text style={styles.text}>
        {
          this.props.type === 'xf'
            ? '专享返现'
            : '实拍推荐'
        }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 18,
    borderBottomRightRadius: 4,
  },
  tagRed: {
    backgroundColor: '#EF3E4A',
  },
  tagGreen: {
    backgroundColor: '#70D152',
  },
  text: {
    fontSize: 11,
    color: '#fff',
    lineHeight: 18,
    marginHorizontal: 4,
  },
});

export default Tag;