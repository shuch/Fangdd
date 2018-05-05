import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class InfoFlowInteraction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shareContainer}>
          <Image source={require('../../img/find/share.png')} style={styles.iconShare} />
          <Image source={require('../../img/find/report.png')} style={styles.iconShare} />
        </View>
        <Image source={require('../../img/find/upvote.png')} style={[styles.iconShare, styles.iconZan]} /> 
        <Text>有用</Text>
        <Text style={styles.number}>(10)</Text>
        <Image source={require('../../img/find/comment.png')} style={[styles.iconShare, styles.iconComment]} /> 
        <Text>评论</Text>
        <Text style={styles.number}>(1)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  shareContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  iconShare: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  iconZan: {
    marginRight: 4,
  },
  iconComment: {
    marginLeft: 13,
    marginRight: 5,
  },
  number: {
    fontSize: 12,
    color: '#999',
  }
});

export default InfoFlowInteraction;