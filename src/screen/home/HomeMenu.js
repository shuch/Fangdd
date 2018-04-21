import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class HomeMenu extends Component {
  render() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7];
    return (
      <View style={styles.menuList}>
        {
          list.map((item, index) => (
            <View style={styles.menuItem} key={index}>
              <Image style={styles.menuItemImage} source={require('../../img/home/menu_xf.png')} />
              <Text style={styles.menuItemText}>新房</Text>
            </View>
          ))
        }
        <View style={styles.headLine}>
          <Image style={styles.headLineIcon} source={require('../../img/home/menu_toutiao.png')} />
          <View style={styles.headeLineRoll}>
            <Text style={styles.headLineText} numberOfLines={1} ellipsizeMode={'tail'}>党中央决定支持海南全到建设自由贸易试验区</Text>
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
  menuItem: {
    width: '25%',
    alignItems: 'center',
    marginTop: 15,
  },
  menuItemText: {
    marginTop: 7
  },
  menuItemImage: {
    width: 44,
    height: 44,
  },
  headLine: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#f8f8f8',
    borderStyle: 'solid',
    marginTop: 20,
    marginLeft: 15,
    paddingVertical: 10,
  },
  headeLineRoll: {
    marginLeft: 10,
    borderLeftWidth: 1,
    borderColor: '#f8f8f8',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  headLineIcon: {
    height: 14,
    width: 57,
    alignSelf: 'flex-end',
  },
  headLineText: {
    width: 270,
    paddingLeft: 10,
    // height: 14,
  },
  iconRight: {
    width: 14,
    height: 14,
  },
});

export default HomeMenu;