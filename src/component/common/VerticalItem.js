import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Tags from './Tags';
import screen from '../../common/screen';

class VerticalItem extends Component {
  render({ data } = this.props) {
    const {
      coverImage,
      cellName,
      shi,
      name,
      area,
      price,
      districtName,
      sectionName,
      tags,
    } = data;
    return (
      <View style={styles.container}>
        <Image source={{ uri: coverImage }} style={styles.houseImg}/>
        <View style={styles.houseInfo}>
          <Text style={styles.title} numberOfLines={1}>{cellName} {shi}居</Text>
          <View style={[styles.section, styles.gap10]}>
            <Text style={styles.areaText}>{name} {area}㎡</Text>
            <Text style={styles.totalPrice}>
              {/* price is much high, so floor it... */}
              {Math.floor(area * price / 10000)}
            </Text>
            <Text style={styles.priceUnit}>万</Text>
          </View>
          <View style={[styles.section, styles.row]}>
            <Text style={styles.block}>{districtName} {sectionName}</Text>
            <Text style={styles.price}>{price}元/㎡</Text>
          </View>
          <View style={styles.row}>
            <Tags data={tags}/>
          </View>
          <View style={[styles.metro, styles.gap10]}>
            <Image source={require('../../img/home/ic_metro.png')} style={styles.metroIcon}/>
            <Text style={styles.metroText}>七号线行知路(距离677米)</Text>
          </View>
          <View style={[styles.ai, styles.gap10]}>
            <Text style={styles.aiText}>"符合您找房意向的房源"</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    borderColor: '#eee',
    borderStyle: 'solid',
    borderBottomWidth: screen.onePixel,
  },
  houseImg: {
    width: 100,
    height: 80,
  },
  houseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  gap10: {
    marginTop: 10,
  },
  areaText: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  totalPrice: {
    fontSize: 16,
    color: '#FF611B',
  },
  priceUnit: {
    fontSize: 12,
    color: '#FF611B', 
  },
  row: {
    marginTop: 7,
  },
  block: {
    flex: 1,
    fontSize: 12,
    color: '#999',
  },
  price: {
    fontSize: 12,
    color: '#999', 
  },
  metro: {
    height: 18,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderStyle: 'solid',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  metroIcon: {
    width: 12,
    height: 12,
    marginHorizontal: 4,
  },
  metroText: {
    fontSize: 10,
    color: '#999',
    marginHorizontal: 2,
    borderLeftWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid'
  },
  ai: {
    backgroundColor: '#f5f5f5',
    alignSelf: 'flex-start',
    height: 22,
    justifyContent: 'center',
  },
  aiText: {
    fontSize: 12,
    color: '#666',
  }
});

export default VerticalItem;