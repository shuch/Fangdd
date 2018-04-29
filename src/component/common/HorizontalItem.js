import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import color from '../../common/color';
import Tag from './Tag';

class HorizontalItem extends Component {
  // props = {
  //   // houseName: '盘古原辅',
  //   // area: '132-165',
  //   // price: '488-709',
  // }
  render() {
    const { houseName, area, price } = this.props.data;
    return (
      <View style={styles.container}>
        <Image source={require('../../img/home/house.jpg')} style={styles.houseImg}/>
        <Text style={styles.houseName}>{houseName}</Text>
        <View style={styles.areaPrice}>
          <Text style={styles.area}>{area}㎡</Text>
          <Text style={styles.price}>
            <Text style={styles.priceVal}>{price}</Text>万
          </Text>
        </View>
        <Tag type={this.props.type} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 156,
    marginLeft: 15,
  },
  houseImg: {
    width: 156,
    height: 100,
  },
  houseName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  areaPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  area: {
    flex: 1,
    fontSize: 12,
  },
  price: {
    fontSize: 12,
    color: color.primary,
  },
  priceVal: {
    fontSize: 17,
  },
});

export default HorizontalItem;