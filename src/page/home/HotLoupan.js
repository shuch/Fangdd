import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Section from '../../component/common/Section';
import HorizontalList from '../../component/common/HorizontalList';
import HorizontalItem from '../../component/common/HorizontalItem';

class HotLoupan extends Component {
  render({ data } = this.props) {
    return (
      <Section more title={'热卖新盘'}>
        <HorizontalList>
          { data.map(item => <HorizontalItem key={item.id} data={item} type={'xf'} />) }
        </HorizontalList>
      </Section>
    );
  }
}

export default HotLoupan;