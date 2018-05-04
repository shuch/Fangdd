import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import color from '../../common/color';

class MineScreen extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: 'grey',
      borderBottomWidth: 0,
      height: 110,
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    headerLeft: (
      <Text style={styles.headerLeft}>业主中心</Text>
    ),
    headerTitle: (
      <View style={styles.headerTitle}>
        <Image source={require('../../img/mine/user.jpg')} style={styles.headerAvatar} />
        <Text style={styles.headerName}>大丫头</Text>
      </View>
    ),
    headerRight: (
      <Image style={styles.headerSet} source={require('../../img/mine/setting.png')} />
    ),
    headerTitleStyle: {
      backgroundColor: 'red',
    },
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.recordList}>
          <View style={styles.record}>
            <Image source={require('../../img/tabbar/message.png')} style={styles.recordIcon} />
            <Text style={styles.recordTitle}>我的关注</Text>
          </View>
          <View style={styles.record}>
            <Image source={require('../../img/tabbar/message.png')} style={styles.recordIcon} />
            <Text style={styles.recordTitle}>我的关注</Text>
          </View>
          <View style={styles.record}>
            <Image source={require('../../img/tabbar/message.png')} style={styles.recordIcon} />
            <Text style={styles.recordTitle}>我的关注</Text>
          </View>
        </View>
        <View style={styles.productionTitle}>
          <Text style={styles.productionTitleText}>产品服务</Text>
        </View>
        <View style={styles.productionList}>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
          <View style={styles.production}>
            <Image style={styles.productionIcon} source={require('../../img/tabbar/message.png')} />
            <Text style={styles.productionText}>我的优惠券</Text>
          </View>
        </View>
        <View style={styles.tel}>
          <Text style={styles.telText}>服务热线：</Text>
          <Text style={styles.tel400}>400-008-9900</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.containerBackground,
  },
  headerLeft: {
    fontSize: 12,
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  headerSet: {
    width: 16,
    height: 16,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  headerTitle: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  headerName: {
    color: '#fff', 
  },
  recordList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  record: {
    paddingVertical: 10,
    alignItems: 'center',
    // borderRightWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#000',
  },
  recordIcon: {
    width: 20,
    height: 20,
  },
  recordTitle: {
    marginTop: 6,
  },
  productionTitle: {
    marginTop: 10,
    height: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: color.borderColor,
    justifyContent: 'center',
  },
  productionTitleText: {
    marginLeft: 10,
  },
  productionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  production: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  productionIcon: {
    width: 20,
    height: 20,
  },
  productionText: {
    fontSize: 10,
    marginTop: 15,
  },
  tel: {
    backgroundColor: color.backgroundColor,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  telText: {
    fontSize: 14,
  },
  tel400: {
    color: color.primary,
  },
});

export default MineScreen;