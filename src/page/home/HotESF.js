import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Section from '../../component/common/Section';
import HorizontalList from '../../component/common/HorizontalList';
import HorizontalItem from '../../component/common/HorizontalItem';

class HotESF extends Component {
  render({ data } = this.props) {
    return (
      <Section more title={'优选二手房'}>
        <Text style={styles.text}>上海最新均价52958元/平，近七天新上3567套</Text>
        <HorizontalList>
          {
            data.map(item => <HorizontalItem key={item.esf.id} data={item.esf} type={'esf'} />)
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