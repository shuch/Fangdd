import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Tags extends Component {
  render() {
    const list = ['满五年', '靠近地铁', '电梯房'];
    return (
      <View style={styles.list}>
        {
          list.map(item => <Text key={item} style={styles.text}>{ item }</Text>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
  item: {
    height: 16,
  },
  text: {
    paddingHorizontal: 4,
    backgroundColor: '#EFF3FC',
    fontSize: 10,
    color: '#668AE9',
    lineHeight: 16,
    alignSelf: 'flex-start',
    marginRight: 5,
  },
});

export default Tags;