import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Tags extends Component {
  slice(arr) {
    return arr.slice(0, 4);
  }
  render({ data } = this.props) {
    return (
      <View style={styles.list}>
        {
          this.slice(data).map((item, index) => <Text key={item} style={styles.text}>{ item }</Text>)
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