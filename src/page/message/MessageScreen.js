import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import color from '../../common/color';
import MessageItem from '../../component/message/MessageItem';

class MessageScreen extends Component {

  static navigationOptions = {
    title: '我的消息',
  }

  render() {
    const messageList = [
      { key: '1' },
      { key: '2' },
      { key: '3' },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={messageList}
          renderItem={({item}) => <MessageItem data={item} key={item.key} /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.containerBackground,
  },
});

export default MessageScreen;