import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

class SwipeBanner extends Component {
  renderImages = () => {
    const imgArr = [];
    const imgData = [0, 1, 2];
    for (let i in imgData) {
      imgArr.push(
        <Image
          key={i}
          source={require('../../img/home/banner.png')}
          style={styles.bannerImg}
        />
      );
    }
    return imgArr;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {this.renderImages()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 15, 
  },
  bannerImg: {
    width: 345,
    height: 82,
  }
});

export default SwipeBanner;