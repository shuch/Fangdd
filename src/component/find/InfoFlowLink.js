import  React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import color from '../../common/color';

class InfoFlowLink extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/find/ic_location.png')} style={styles.locationIcon} />
        <Text style={styles.location} numberOfLines={1} >五角场 仁德路67弄10支弄 2居</Text>
        <Text style={styles.price}>348</Text>
        <Text style={styles.unit}>万</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 40,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  locationIcon: {
    width: 16,
    height: 16,
    // marginLeft: 10,
    marginRight: 10,
  },
  location: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: color.primary,
  },
  unit: {
    fontSize: 13,
    color: color.primary,
  },
});

export default InfoFlowLink;