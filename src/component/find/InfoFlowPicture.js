import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InfoFlowPicture extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={require('../../img/find/info_flow_image_1.png')} style={styles.image1} /> */}
        <Image source={require('../../img/find/info_flow_image_1.png')} style={styles.image2} />
        <Image source={require('../../img/find/info_flow_image_1.png')} style={styles.image2} />
        <Image source={require('../../img/find/info_flow_image_1.png')} style={[styles.image3, styles.row2]} />
        <Image source={require('../../img/find/info_flow_image_1.png')} style={[styles.image3, styles.row2]} />
        <Image source={require('../../img/find/info_flow_image_1.png')} style={[styles.image3, styles.row2]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image1: {
    flex: 1,
    height: 194,
  },
  image2: {
    width: 170,
    height: 136,
  },
  image3: {
    width: 112,
    height: 90,
  },
  row2: {
    marginTop: 5,
  },
});

export default InfoFlowPicture;