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
    const {
      area,
      name,
      sectionName,
      cellName,
      areaRank,
      price,
      coverImage,
      minTotalPrice,
      maxTotalPrice, 
    } = this.props.data;
    return (
      <View style={styles.container}>
        <Image source={{ uri: coverImage }} style={styles.houseImg}/>
        <Text style={styles.houseName} numberOfLines={1}>
          { this.props.type === 'xf' ? name : `${sectionName} ${cellName}` }
        </Text>
        <View style={styles.areaPrice}>
          <Text style={styles.area}>
          { this.props.type === 'xf' ? areaRank : `${name} ${area}㎡` }
          </Text>
          <Text style={styles.price}>
            {
              this.props.type === 'xf' ? (
                minTotalPrice && maxTotalPrice ? [
                  <Text style={styles.priceVal} key={0}>
                    {Math.floor(minTotalPrice / 10000)}-{Math.floor(maxTotalPrice / 10000)}
                  </Text>,
                  <Text key={1}>万</Text>
                  ] : "售价待定"
              ) : ([
                <Text style={styles.priceVal} key={0}>
                  {Math.ceil(price * area / 10000)}
                </Text>,
                <Text key={1}>万</Text> 
              ])
            }
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
    flex: 1,
  },
  areaPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 1,
    height: 21,
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