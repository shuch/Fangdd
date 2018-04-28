import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Section from '../../component/common/Section';

class RecommendList extends Component {
  render() {
    return (
      <Section title="为您推荐">
        <View style={styles.subscribeTitle}>
          <Text
            style={styles.subscribeText}
            numberOfLines={1}
          >为您搜罗大华，总价600万左右，二室，三室，四室，环境优雅，干净整洁</Text>
          <Image style={styles.subscribeIcon} source={require('../../img/home/right_icon.png')} />
        </View>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  subscribeTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 5,
    marginHorizontal: 15,
  },
  subscribeText: {
    color: '#333',
    flex: 1,
  },
  subscribeIcon: {
    width: 14,
    height: 14,
  }
});

export default RecommendList;