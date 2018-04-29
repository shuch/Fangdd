import React, { Component } from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import HorizontalList from '../../component/common/HorizontalList';
import Card from './CatageryCard';
import catageoyList from '../../data/home_catagery';

class Catagery extends Component {
  render() {
    return (
      <HorizontalList>
        {
          catageoyList.map(item => <Card key={item.title} data={item} />)
        }
      </HorizontalList>
    );
  }
}

export default Catagery;