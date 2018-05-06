import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import screen from '../../common/screen';

class HomeTitle extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <View style={styles.location}>
          <Text style={styles.cityName}>上海</Text>
          <Image style={styles.downIcon} source={require('../../img/home/down_icon.png')}/>
        </View>
        <Image style={styles.searchIcon} source={require('../../img/home/search_icon.png')} />
        <Text style={styles.placeholder}>请输入小区名、楼盘、商圈名</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: screen.onePixel,
    borderColor: '#C6C6C6',
    borderRadius: 4,
    marginHorizontal: 15,
    height: 44,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity:0.14, 
    shadowRadius: 6,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#f8f8f8',
    borderStyle: 'solid',
    paddingHorizontal: 8,
  },
  cityName: {
    fontSize: 12,
  },
  downIcon: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    width: 12,
    height: 12,
    marginHorizontal: 10,
  },
  placeholder: {
    color: 'grey',
    fontSize: 14,
  },
});

export default HomeTitle;