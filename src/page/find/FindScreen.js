import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Tabs from './Tabs';
import RecommendList from './RecommendList';
import FollowList from './FollowList';

class FindScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          <RecommendList title="推荐"/>
          <FollowList title="关注" />
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2185B',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});

export default FindScreen;