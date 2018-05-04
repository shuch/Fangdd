import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class PromotionCard extends Component {
  render() {
    const { title, subTitle, link, img } = this.props.data;
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{ title }</Text>
        <Text style={styles.cardSubTitle}>{ subTitle }</Text>
        <Image style={styles.cardImage} source={ img } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  cardTitle: {
    color: '#333',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
  },
  cardSubTitle: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
    fontWeight: "200",
  },
  cardImage: {
    width: 110,
    height: 70,
    marginTop: 12,
    marginBottom: 5,
    marginHorizontal: 5,
  }
});

export default PromotionCard;