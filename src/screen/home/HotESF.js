import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Section from '../../component/common/Section';
import HorizontalList from '../../component/common/HorizontalList';
import HorizontalItem from '../../component/common/HorizontalItem';

class HotESF extends Component {
  render() {
    const list = [
      {id: 1, houseName: '白鹤 国和一村', area: '2室1厅1卫 80', price: '142'},
      {id: 2, houseName: '杨浦 真光七街坊', area: '2室2厅1卫 102', price: '142'},
      {id: 3, houseName: '海湾旅游区 燎原一村', area: '3室1厅1卫 120', price: '500'},
    ];
    return (
      <Section more title={'优选二手房'}>
        <Text style={styles.text}>上海最新均价52958元/平，近七天新上3567套</Text>
        <HorizontalList>
          {
            list.map(item => <HorizontalItem key={item.id} data={item} type={'esf'} />)
          }
        </HorizontalList>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: -10,
  },
});

export default HotESF;