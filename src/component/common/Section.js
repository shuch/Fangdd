import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Section extends Component {
  render() {
    return (
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>{this.props.title}</Text>
          {
            this.props.more ? (
              <View style={styles.more}>
                <Text style={styles.moreText}>更多</Text>
                <Image style={styles.iconRight} source={require('../../img/home/right_icon_grey.png')}/>
              </View>
            ) : null
          }
        </View>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    borderTopWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 15,
  },
  sectionTitle: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '200',
  },
  iconRight: {
    width: 7,
    height: 12,
  },
});

export default Section;