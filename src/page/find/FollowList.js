import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import InfoFlow from '../../component/find/InfoFlow';

class RecommendList extends Component {
  render() {
    const list = [
      { key: "1" },
      { key: "2" },
      { key: "3" },
    ]
    return (
      <View>
        <FlatList
          data={list}
          renderItem={({item}) => <InfoFlow /> }
        />
      </View>
    )
  }
}

export default RecommendList;