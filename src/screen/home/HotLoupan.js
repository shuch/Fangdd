import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Section from '../../component/common/Section';
import HorizontalList from '../../component/common/HorizontalList';
import HorizontalItem from '../../component/common/HorizontalItem';

class HotLoupan extends Component {
  render() {
    const list = [
      {id: 1, houseName: '绿地长岛', area: '75-120', price: '86-142'},
      {id: 2, houseName: '淀山湖一号', area: '75-120', price: '86-142'},
      {id: 3, houseName: '翰林苑', area: '75-120', price: '86-142'},
    ];
    return (
      <Section more title={'热卖新盘'}>
        <HorizontalList>
          {
            list.map(item => <HorizontalItem key={item.id} data={item} />)
          }
        </HorizontalList>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  section: {

  }, 
});

export default HotLoupan;