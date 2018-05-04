import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';


class ToutiaoScreen extends Component {

  static navigationOptions = {
    title: '房市头条',
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://m.fangdd.com/sh/news/t-list.html?fromType=fddapp&fromShare=wct' }}
        // style={}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  }
}); 

export default ToutiaoScreen;