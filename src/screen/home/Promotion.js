import React, { Component } from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import HorizontalList from '../../component/common/HorizontalList';
import Card from './PromotionCard';

class Promotion extends Component {
  render() {
    const cardList = [1, 2, 3];
    return (
      <HorizontalList>
        {
          cardList.map(item => <Card key={item} />)
        }
      </HorizontalList>
    );
  }
}

export default Promotion;