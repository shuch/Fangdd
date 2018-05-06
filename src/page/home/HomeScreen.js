import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import HomeMenu from './HomeMenu';
import Catagery from './Catagery';
import HotLoupan from './HotLoupan';
import HotESF from './HotESF';
import SwipeBanner from './SwipeBanner';
import HotAgents from './HotAgents';
import RecommendList from './RecommendList';
import VerticalItem from '../../component/common/VerticalItem'
import HomeTitle from '../../component/home/HomeTitle';
import Api from '../../data/Api';

class HomeScreen extends Component {
  state = {
    hotLoupan: [],
    hotEsf: [],
    homeRecommend: [],
    page: 1,
    homeRecommendLimited: 30,
  }
  static navigationOptions = () => ({
    headerTitle: (
      <HomeTitle />
    ),
    headerTitleStyle: {
      color: 'red',
      marginTop: 20,
    },
    headerStyle: {
      backgroundColor: '#fff',
      height: 69,
      borderBottomWidth: 0,
    },
  })
  componentWillMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.fetchHotLoupan();
    this.fetchHotEsf();
    this.fetchHomeRecommend();
  }
  fetchHotLoupan = async () => {
    const response = await fetch(Api.hotLoupan);
    const json = await response.json();
    this.setState({
      hotLoupan: json.data,
    });
  }
  fetchHotEsf = async () => {
    const response = await fetch(Api.hotEsf);
    const json = await response.json();
    this.setState({
      hotEsf: json.data,
    });
  }
  fetchHomeRecommend = async () => {
    const response =  await fetch(`${Api.homeRecommend}&pageNo=${this.state.page}`);
    const json = await response.json();
    this.setState({
      homeRecommend: json.data,
    });
  }
  reachBottom = () => {
    // if (this.state.homeRecommend.length < this.state.homeRecommendLimited) {
    //   console.log(this.state.homeRecommend);
    //   this.setState(state => ({ page: state.page + 1 }), () => this.fetchHomeRecommend());
    // }
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <HomeMenu />
        <Catagery />
        <HotLoupan data={this.state.hotLoupan} />
        <HotESF data={this.state.hotEsf} />
        <SwipeBanner />
        {/* <HotAgents /> */}
        <RecommendList />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.homeRecommend}
          keyExtractor={(item) => String(item.esf.id) }
          renderItem={({item}) => <VerticalItem data={item.esf}/> }
          ListHeaderComponent={this.renderHeader}
          onEndReached={this.reachBottom}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
  },
  header: {
    margin: 0,
  },
});

export default HomeScreen;