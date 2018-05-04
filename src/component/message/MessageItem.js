import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import color from '../../common/color';

class MessageItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/message/agent_avatar.png')} style={styles.header}/>
        <View style={styles.body}>
          <View style={styles.info}>
            <Text style={styles.name}>房市动态</Text>
            <Text style={styles.time}>08:06</Text>
          </View>
          <Text style={styles.content} numberOfLines={1}>程玉忠：您好，我是程玉忠，很高兴为您服务，您关注的复兴花园有一套房子正在出售</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  body: {
    // height: 80,
    alignItems: 'center',
    paddingVertical: 15, 
    paddingRight: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: color.borderColor,
    borderStyle: 'solid',
  },
  info: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
  },
  time: {
    color: color.grey,
    fontSize: 10,
  },
  content: {
    flex: 1,
    color: color.grey,
    fontSize: 12,
    marginTop: 10,
    padding: 0,
  },
});

export default MessageItem;