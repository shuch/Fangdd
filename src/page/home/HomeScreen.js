import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import HomeMenu from './HomeMenu';
import Catagery from './Catagery';
import HotLoupan from './HotLoupan';
import HotESF from './HotESF';
import SwipeBanner from './SwipeBanner';
import HotAgents from './HotAgents';
import RecommendList from './RecommendList';
import VerticalItem from '../../component/common/VerticalItem';

class HomeScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: (
      <View style={styles.searchBar}>
        <View style={styles.location}>
          <Text style={styles.cityName}>上海</Text>
          <Image style={styles.downIcon} source={require('../../img/home/down_icon.png')}/>
        </View>
        <Image style={styles.searchIcon} source={require('../../img/home/search_icon.png')} />
        <Text style={styles.placeholder}>请输入小区名、楼盘、商圈名</Text>
      </View>
    ),
    headerTitleStyle: {
      color: 'red',
      marginTop: 20,
    },
    headerStyle: {
      backgroundColor: '#fff',
      // margin: 10,
      // paddingTop: 35,
      // paddingBottom: 10,
      height: 69,
      borderWidth: 0,
      // flexDirection: 'column',
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      // paddingVertical: 15,
    },
  })
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <HomeMenu />
        <Catagery />
        <HotLoupan />
        <HotESF />
        <SwipeBanner />
        {/* <HotAgents /> */}
        <RecommendList />
      </View>
    );
  }
  render() {
    const recommendList = [
      { key: '1' },
      { key: '2' },
      { key: '3' },
    ]
    return (
      <View style={styles.container}>
        <FlatList
          data={recommendList}
          renderItem={({item}) => <VerticalItem key={item.key}/> }
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
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
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#C6C6C6',
    // borderStyle: 'solid',
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
  header: {
    margin: 0,
    // alignItems: 'flex-start',
  }
  
});

export default HomeScreen;