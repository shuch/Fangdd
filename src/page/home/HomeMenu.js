import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import menuList from '../../data/home_menu';
import HomeMenuItem from '../../component/home/HomeMenuItem';

class HomeMenu extends Component {
  render() {
    return (
      <View style={styles.menuList}>
        {
          menuList.map(item => <HomeMenuItem key={item.title} data={item} />)
        }
        <View style={styles.headLine}>
          <Image style={styles.headLineIcon} source={require('../../img/home/menu_toutiao.png')} />
          <View style={styles.headeLineRoll}>
            <Text style={styles.headLineText} numberOfLines={1} ellipsizeMode={'tail'}>
              党中央决定支持海南全到建设自由贸易试验区
            </Text>
            <Image style={styles.iconRight} source={require('../../img/home/right_icon.png')}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 0,
    backgroundColor: '#fff',
  },
  
  headLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    marginTop: 20,
    // marginLeft: 15,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 15,
  },
  headeLineRoll: {
    marginLeft: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  headLineIcon: {
    height: 14,
    width: 57,
    alignSelf: 'flex-end',
  },
  headLineText: {
    // flex: 1,
    width: 270,
    // paddingLeft: 10,
    // height: 14,
  },
  iconRight: {
    width: 14,
    height: 14,
  },
});

export default HomeMenu;